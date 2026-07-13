const Book = require("../models/Book");

const addBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      description,
      price,
      seller,
    } = req.body;

    const book = await Book.create({
      title,
      author,
      category,
      description,
      price,
      seller,
      image: "",
    });

    res.status(201).json({
      success: true,
      message: "Book Added Successfully",
      book,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getSellerBooks = async (req, res) => {
  try {
    const { sellerId } = req.params;

    const books = await Book.find({ seller: sellerId });

    res.status(200).json(books);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        message: "Book Not Found",
      });
    }

    res.status(200).json(book);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
module.exports = {
  addBook,
  getSellerBooks,
  getAllBooks,
  getBookById,
};