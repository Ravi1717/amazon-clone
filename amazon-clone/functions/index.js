const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ5TsE8vN4mOLhZRAdlIL5LzxwEwEoOnEvzVZc2IwPM5YbYR4Wq3uYikemR9MsRs2OMav5HVFlgo7gxNulQHn4b00Uov98cXE"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub units of currency
    currency: "usd",
  });

  //Ok - created
  response.status(201).status({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-4b021/us-central1/api
