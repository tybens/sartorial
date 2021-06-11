const functions = require("firebase-functions");
const cors = require('cors')

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// connect to the stripe server
const stripe = require('stripe')(functions.config().stripe.test_secret_key)

exports.recordOrder = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, () => {
        // Grab the order data (may be in req.query...)
        const orderData = req.body;
        // Push the new message into Firestore using the Firebase Admin SDK.
        const writeResult = admin.firestore().collection('orders').add({
            orderData: {
                ...orderData,
                created: admin.firestore.Timestamp.now()
            }
        });
        // Send back a message that we've successfully written the message
        res.json({ result: `Order with ID: ${writeResult} added.` });
    })
});


exports.paymentSecret = functions.https.onRequest(async (req, res) => {

    return cors()(req, res, async () => {
        function calculateOrderAmount(obj) {
            var sum = 0;
            for (var el in obj) {
              if (obj.hasOwnProperty(el) && obj[el].hasOwnProperty('quantity') && obj[el].hasOwnProperty('product')) {
                sum += parseFloat(obj[el].quantity)*parseFloat(obj[el].product.price);
              }
            }
            return sum*100; // stripe units are cents
          };

        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(req.body),
            currency: "usd"
        });

        // send back from server to client
        res.json({clientSecret: paymentIntent.client_secret})


    });
})

// join the email list
exports.emailListJoin = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, () => {
        // Grab the order data (may be in req.query...)
        const email = req.body.email;
        // Push the new message into Firestore using the Firebase Admin SDK.
        const writeResult = admin.firestore().collection('emails').add({
            email: {
                email,
                joined: admin.firestore.Timestamp.now()
            }
        });
        // Send back a message that we've successfully written the message
        res.json({ result: `Email: ${writeResult} added to email list.` });
    })
});