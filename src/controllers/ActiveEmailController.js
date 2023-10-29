const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

dotenv.config();

class ActiveEmailController {
  static Active = async (req, res) => {
    const token = req.query.token;
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken) {
      return res.json({ error: "oh hell no" });
    }
    const email = decodedToken.email;
    try {
      await User.findOneAndUpdate(
        { email: email },
        { $set: { isVerified: true } },
        { new: true }
      );
      return res.send(200).json({ success: "Email Activated successfully" });
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ error: "Invalid or expired token." });
    }
  };
}
module.exports = ActiveEmailController;
