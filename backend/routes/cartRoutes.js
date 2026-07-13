const express = require("express");
const router = express.Router();

const {
  addToCart,
  getUserCart,
} = require("../controllers/cartController");

router.post("/add", addToCart);

router.get("/:userId", getUserCart);

module.exports = router;