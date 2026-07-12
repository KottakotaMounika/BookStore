const express = require("express");
const router = express.Router();

console.log("✅ authRoutes loaded");

const { register } = require("../controllers/authController");

router.post("/register", register);

module.exports = router;