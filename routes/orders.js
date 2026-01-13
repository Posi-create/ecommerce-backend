const router = require("express").Router();
const Order = require("../models/Order");

// Create order
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all orders (admin later)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
