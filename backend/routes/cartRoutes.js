const express = require("express");
const router = express.Router();

const {
  addToCart,
  getUserCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = require("../controllers/cartController");

// Add Book to Cart
router.post("/add", addToCart);

// Get User Cart
router.get("/:userId", getUserCart);

// Increase Quantity
router.put("/increase/:cartId", increaseQuantity);

// Decrease Quantity
router.put("/decrease/:cartId", decreaseQuantity);

// Remove Item
router.delete("/remove/:cartId", removeFromCart);

module.exports = router;