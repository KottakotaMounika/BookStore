const express = require("express");
const router = express.Router();

const {
  addBook,
  getSellerBooks,
} = require("../controllers/bookController");

router.post("/add", addBook);

router.get("/seller/:sellerId", getSellerBooks);

module.exports = router;