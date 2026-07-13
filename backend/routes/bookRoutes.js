const express = require("express");
const router = express.Router();

const {
  addBook,
  getSellerBooks,
  getAllBooks,
  getBookById,
} = require("../controllers/bookController");

router.post("/add", addBook);

router.get("/", getAllBooks);

router.get("/seller/:sellerId", getSellerBooks);

router.get("/:id", getBookById);

module.exports = router;