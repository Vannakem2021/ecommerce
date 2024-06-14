//sk_test_51PFdtoP3JzmIavpIev8JKkbDAfB6JBv4h75nehYduYDDJb3a0cR2a8x0Yr5FfhN5PkPXPyAX1NcwlxBtCc82G5nj00Bfg8LYqT

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

//origin
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

const stripe = require("stripe")(
  "sk_test_51PFdtoP3JzmIavpIev8JKkbDAfB6JBv4h75nehYduYDDJb3a0cR2a8x0Yr5FfhN5PkPXPyAX1NcwlxBtCc82G5nj00Bfg8LYqT",
);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.listen(5001);
