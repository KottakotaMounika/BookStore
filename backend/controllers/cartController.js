const Cart = require("../models/Cart");

// =======================
// Add Book to Cart
// =======================
const addToCart = async (req, res) => {
  try {
    const { user, book } = req.body;

    const existing = await Cart.findOne({ user, book });

    if (existing) {
      existing.quantity += 1;
      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated",
      });
    }

    await Cart.create({
      user,
      book,
      quantity: 1,
    });

    res.status(201).json({
      success: true,
      message: "Added To Cart",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Get User Cart
// =======================
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.find({
      user: userId,
    }).populate("book");

    res.status(200).json(cart);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Increase Quantity
// =======================
const increaseQuantity = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    cart.quantity += 1;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Quantity Increased",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Decrease Quantity
// =======================
const decreaseQuantity = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    if (cart.quantity > 1) {
      cart.quantity -= 1;
      await cart.save();

      return res.status(200).json({
        success: true,
        message: "Quantity Decreased",
      });
    }

    await Cart.findByIdAndDelete(cartId);

    res.status(200).json({
      success: true,
      message: "Item Removed From Cart",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Remove Cart Item
// =======================
const removeFromCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    await Cart.findByIdAndDelete(cartId);

    res.status(200).json({
      success: true,
      message: "Item Removed Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addToCart,
  getUserCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
};