const hashPassword = require("../helpers/hashPassword");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
class authController {
  static register = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    try {
      const checkUserEmail = await User.findOne({ where: { email } });
      if (checkUserEmail) {
        return res.status(400).json({ message: "This email already exists" });
      }
      const hashedPassword = await hashPassword(password);
      const user = await User.create({
        name,
        email,
        role,
        password: hashedPassword,
      });
      const token = jwt.sign(
        { userRole: user.role, email: user.email, name: user.name },
        process.env.SECRET_KEY,
        {
          expiresIn: 600,
        }
      );
      res.status(201).json({ message: "User created", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "email or password are not allowed to be empty",
      });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          status: "error",
          message: "No user found with this email.",
        });
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);
      if (passwordMatch) {
        res.json({
          message: "hello " + user.name + " Your role is " + user.role,
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
  static logout = async (req, res) => {
    res.clearCookie("token");
    res.status(201).json({ message: "you are logged out" });
  };
}

module.exports = authController;
