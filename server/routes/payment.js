// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // set your Stripe secret key in env

router.post("/create-checkout-session", async (req, res) => {
  const { packageName, amount, customerEmail, packageId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: packageName,
            },
            unit_amount: amount * 100, // convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: customerEmail,
      success_url: `${process.env.CLIENT_URL}/success?packageId=${packageId}`,
      cancel_url: `${process.env.CLIENT_URL}/booking/${packageId}`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

module.exports = router;
