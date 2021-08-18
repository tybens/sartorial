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
    // Send back a message that we've successfully written the message
    res.json({ result: `Order with ID: ${writeResult} added.` });
  });
});

exports.paymentSecret = functions.https.onRequest(async (req, res) => {
  return cors()(req, res, async () => {
    function calculateOrderAmount(obj) {
      var sum = 0;
      for (var el in obj) {
        if (
          obj.hasOwnProperty(el) &&
          obj[el].hasOwnProperty("quantity") &&
          obj[el].hasOwnProperty("product")
        ) {
          sum +=
            parseFloat(obj[el].quantity) * parseFloat(obj[el].product.price);
        }
      }
      return sum * 100; // stripe units are cents
    }

    const taxes = 1.07;

    const paymentIntent = await stripe.paymentIntents.create({
      amount:
        calculateOrderAmount(req.body.cart) * (1 - req.body.discount) * taxes,
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
    var docRef = db.collection("coupon").doc("earlybird");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let uses = doc.data().uses;
          if (uses >= 30) {
            res.json({ result: `too slow` });
          } else {
            res.json({ result: `success` });
          }
          docRef.set({
            uses: parseInt(doc.data().uses) + 1,
          });
        } else {
          docRef.set({
            uses: 0,
          });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    // Send back a message that we've successfully written the message
  });
});
