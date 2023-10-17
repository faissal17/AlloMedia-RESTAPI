const express = require("express");
const hashPassword = require("../helpers/hashPassword");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

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
    const { email, password, role } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.json({ message: "No user found with this email." });
      }

      const passwordMatch = await bcryptjs.compare(password, user.password);

      if (passwordMatch) {
        const userRole = user.role;
        res.json({
          message: "You have been logged in, Your role is " + userRole,
        });
        return res.json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Incorrect password." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "server error" });
    }
  };
}

module.exports = authController;
