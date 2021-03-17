const functions = require("firebase-functions");
const cors = require('cors')

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
    return cors()(request, response, () => {
        functions.logger.info("Hello logs!", { structuredData: true });
        response.send("Hello from Firebase!");
    });
});


exports.recordOrder = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, () => {
        // Grab the order data (may be in req.query...)
        console.log(req)
        const orderData = req;
        // Push the new message into Firestore using the Firebase Admin SDK.
        const writeResult = admin.firestore().collection('orders').add({ orderData: orderData });
        // Send back a message that we've successfully written the message
        res.json({ result: `Order with ID: ${writeResult.id} added.` });
    })
});

