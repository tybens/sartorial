const functions = require("firebase-functions");
// Required for side-effects
require("firebase/firestore");

const cors = require("cors");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
// I had to run this for admin.credential.applicationDefault() to work
// export GOOGLE_APPLICATION_CREDENTIALS="/home/tybens/Downloads/sartorial-indy-firebase-adminsdk-meyuc-7e358b5bf9.json"
var firebaseConfig = {
  apiKey: functions.config().fb.api_key,
  authDomain: functions.config().fb.auth_domain,
  projectId: functions.config().fb.project_id,
  storageBucket: "sartorial-indy.appspot.com",
  messagingSenderId: "544958783784",
  appId: functions.config().fb.app_id,
  measurementId: "G-C95602L8L0",
  credential: admin.credential.applicationDefault(),
  // databaseURL:
};

admin.initializeApp(firebaseConfig);
const db = admin.firestore();
// connect to the stripe server
const stripe = require("stripe")(functions.config().stripe.secret_key);

function calculateOrderAmountWithTax(obj) {
  var sum = 0;
  const taxes = 1.07;
  for (var el in obj) {
    if (
      obj.hasOwnProperty(el) &&
      obj[el].hasOwnProperty("quantity") &&
      obj[el].hasOwnProperty("price")
    ) {
      let thisSum = parseFloat(obj[el].quantity) * parseFloat(obj[el].price);
      if (
        obj[el].hasOwnProperty("data") &&
        obj[el].data.hasOwnProperty("collection") &&
        obj[el].data.collection !== "donation"
      ) {
        sum += thisSum * taxes;
      } else {
        sum += thisSum;
      }
    }
  }
  return sum;
}

function calculateOrderAmountNoTax(cart) {
  var sum = 0;
  for (var el in cart) {
    if (
      cart.hasOwnProperty(el) &&
      cart[el].hasOwnProperty("quantity") &&
      cart[el].hasOwnProperty("price")
    ) {
      sum += parseFloat(cart[el].quantity) * parseFloat(cart[el].price);
    }
  }
  return sum;
}

function round(num) {
  return Math.round(num * 100) / 100;
}

function sendReceipt(orderData) {
  let productDescriptions = [];
  let productImages = [];
  let taxes = 1.07;
  let rawPrice = calculateOrderAmountNoTax(orderData.cart);
  let totalPrice = calculateOrderAmountWithTax(orderData.cart);
  let discountPrice = rawPrice * orderData.payment.discount;

  Object.values(orderData.cart).forEach((item) => {
    productDescriptions.push(
      `${item.data.product.name}${
        item.data.collection === "s21-music" ? "" : `, ${item.data.size}`
      } | Quantity: ${item.quantity}`
    );
    // "HA317AT" Tee, S | Quantity: 1
    productImages.push(item.data.product.img);
  });

  // send email
  db.collection("mail")
    .add({
      to: orderData.customer.email,
      bcc: ["admin@habitatsartorial.org", "tylersmilerb@gmail.com"],
      template: {
        name: "receipt",
        data: {
          productDescriptions: productDescriptions,
          apparelPrice: rawPrice,
          discountString: discountPrice ? `-$${discountPrice} - discount` : "",
          taxes: String(round(totalPrice - rawPrice)),
          totalPrice: String(round(totalPrice - discountPrice)),
          images: productImages,
        },
      },
    })
    .then(() => console.log("Queued email for delivery!"));
}

exports.recordOrder = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    // Grab the order data (may be in req.query...)
    const orderData = req.body;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await db.collection("orders").add({
      orderData: {
        ...orderData,
        created: admin.firestore.Timestamp.now(),
      },
    });

    // record their email to the email list
    db.collection("emails")
      .add({
        email: {
          email: orderData.customer.email,
          joined: admin.firestore.Timestamp.now(),
          how: "ordered",
        },
      })
      .then(() => console.log("Email added to email list db"));

    // send json to admin
    db.collection("mail")
      .add({
        to: "admin@habitatsartorial.org",
        message: {
          subject: `Order with ID: ${writeResult}`,
          html: JSON.stringify(orderData),
        },
      })
      .then(() => console.log("JSON data sent!"));

    sendReceipt(orderData);

    // Send back a message that we've successfully written the message
    res.json({ result: `Order with ID: ${writeResult} added.` });
  });
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    //get contact form data from the req and then assigned it to variables
    // const email = req.body.data.email;
    // const name = req.body.data.name;
    // const message = req.body.data.message;
    //config the email message
    const mailOptions = {
      to: `admin@habitatsartorial.org`,
      message: {
        subject: "New message from the app",
        text: `says:`,
      },
    };

    db.collection("mail")
      .add(mailOptions)
      .then(() => console.log("Queued email for delivery!"));

    return res.json({ result: "success, hopefully" });
  });
});

exports.paymentSecret = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(
        calculateOrderAmountWithTax(req.body.cart) *
          100 * // stripe units are in cents
          (1 - req.body.discount)
      ),
      currency: "usd",
    });

    // send back from server to client
    res.json({ clientSecret: paymentIntent.client_secret });
  });
});

// join the email list
exports.emailListJoin = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, () => {
    // Grab the order data (may be in req.query...)
    const email = req.body.email;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = db.collection("emails").add({
      email: {
        email,
        joined: admin.firestore.Timestamp.now(),
        how: "email list box",
      },
    });
    // Send back a message that we've successfully written the message
    res.json({ result: `Email: ${writeResult} added to email list.` });
  });
});

// coupon codes
const cc = require("coupon-code");

// add coupon codes data to firestore
exports.addDataToFirestore = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    // Grab the order data (may be in req.query...)
    let data = [...Array(35)].map((i) => ({
      code: cc.generate(),
      discount: 0.1,
      used: false,
    }));

    data.forEach(({ code }) => console.log(code));

    // Push the new message into Firestore using the Firebase Admin SDK.
    //   const writeResult = await db.collection("coupon").add({ codeData: data[0] });
    const writeResponse = await data.forEach((code) => {
      db.collection("coupon").add({ codeData: code });
    });

    // Send back a message that we've successfully written the message
    res.json({ result: `success` });
  });
});

// add coupon codes data to firestore
exports.checkEarlyBirdCoupon = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    const multiUseCodes = ["EARLYBIRD", "AGIFTFORINDY", "IUPUIEXPO"];

    console.log(req.body);
    var docRef = db
      .collection("coupon")
      .doc(
        req.body.couponCode == "EARLYBIRD" ? "earlybird" : req.body.couponCode
      );

    let maxUses = multiUseCodes.includes(req.body.couponCode) ? 30 : 1;

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let uses = doc.data().uses;
          if (uses >= maxUses) {
            res.json({ result: `too slow` });
          } else {
            res.json({ result: `success`, discount: doc.data().discount });
            // increment coupon uses because it worked
            docRef.set({
              uses: parseInt(doc.data().uses) + 1,
            });
          }
        } else {
          // coupon doesn't exist...
          res.json({ result: `na` });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    // Send back a message that we've successfully written the message
  });
});

exports.listData = functions.https.onRequest(async (req, res) => {
  var dbQuery = req.body.db;

  db.collection(dbQuery)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });

  res.json({ result: "success" });
});
