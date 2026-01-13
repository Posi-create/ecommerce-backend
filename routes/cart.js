const router = require("express").Router();

// Get cart (for now, frontend uses localStorage, so this is basic)
router.get("/", (req, res) => {
  res.json({ message: "Cart route working" });
});

module.exports = router;
