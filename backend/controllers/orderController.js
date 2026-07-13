const Order = require("../models/Order");
const Cart = require("../models/Cart");

const checkout = async (req, res) => {
  try {
    const { userId } = req.body;

    const cartItems = await Cart.find({ user: userId }).populate("book");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is Empty",
      });
    }

    for (const item of cartItems) {
      await Order.create({
        user: userId,
        seller: item.book.seller,
        book: item.book._id,
        quantity: item.quantity,
        totalPrice: item.book.price * item.quantity,
      });
    }

    await Cart.deleteMany({ user: userId });

    res.json({
      success: true,
      message: "Order Placed Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ user: userId })
      .populate("book");

    res.status(200).json(orders);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getSellerOrders = async (req, res) => {
  try {
    const { sellerId } = req.params;

    const orders = await Order.find({ seller: sellerId })
      .populate("book")
      .populate("user", "name email");

    res.status(200).json(orders);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
module.exports = {
  checkout,
  getUserOrders,
  getSellerOrders,
};