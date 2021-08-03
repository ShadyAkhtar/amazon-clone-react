const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JK2xNSDeK3BOhXXwEWVpt6fyKHjYlHMll61tILM3VLdfFXhkFa5uuawg11luMaKTn3MfABTsnLbraVmdZWQa9jQ00J2Keajac')

// API 

// App Config
const app =express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("payment request reecived!! AMOUNT >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "inr",
    })
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)