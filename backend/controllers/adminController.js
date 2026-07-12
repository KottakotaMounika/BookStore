const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalSellers = await User.countDocuments({ role: "seller" });
    const totalAdmins = await User.countDocuments({ role: "admin" });

    res.json({
      totalUsers,
      totalSellers,
      totalAdmins,
      totalBooks: 0,
      totalOrders: 0,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
module.exports = {
  getDashboard,
  getUsers,
};