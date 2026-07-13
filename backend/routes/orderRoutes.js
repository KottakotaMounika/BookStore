const express = require("express");
const router = express.Router();

const {
  checkout,
  getUserOrders,
  getSellerOrders,
} = require("../controllers/orderController");

router.post("/checkout", checkout);
router.get("/user/:userId", getUserOrders);
router.get("/seller/:sellerId", getSellerOrders);
module.exports = router;