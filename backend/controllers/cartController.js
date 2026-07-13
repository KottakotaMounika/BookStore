const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {
    const { user, book } = req.body;

    const existing = await Cart.findOne({
      user,
      book,
    });

    if (existing) {
      existing.quantity += 1;
      await existing.save();

      return res.json({
        message: "Cart Updated",
      });
    }

    await Cart.create({
      user,
      book,
    });

    res.json({
      message: "Added To Cart",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.find({ user: userId })
      .populate("book");

    res.status(200).json(cart);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
module.exports = {
  addToCart,
  getUserCart,
};