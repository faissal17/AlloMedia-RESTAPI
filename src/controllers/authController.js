const express = require("express");
const hashPassword = require("../helpers/hashPassword");
const User = require("../models/User");

class authController {
  static register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      return res.json({ message: "All fields are required" });
    }
    try {
      const checkUserEmail = await User.findOne({ where: { email } });
      if (checkUserEmail) {
        return res.json({ message: "this email already exists" });
      }
      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.json({ message: "user created" });
    } catch (error) {
      console.log(error);
    }
  };
  static login = async (req, res) => {
    const { email, password } = req.body;
  };
}

module.exports = authController;
