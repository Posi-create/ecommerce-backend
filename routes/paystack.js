const router = require("express").Router();
const axios = require("axios");

router.post("/pay", async (req, res) => {
  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: req.body.email,
      amount: req.body.amount * 100
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
      }
    }
  );

  res.json(response.data);
});

module.exports = router;
