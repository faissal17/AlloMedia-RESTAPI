const User = require("../models/User");
const sendEmail = require("../helpers/sendEmail");
const dotenv = require("dotenv");
dotenv.config();

class ForgetPasswordController {
  static forget = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res
        .status(401)
        .json({ msg: "Please enter your registered email" });
    }
    try {
      const checkUserEmail = await User.findOne({ where: { email } });
      if (!checkUserEmail) {
        return res.status(400).json({ message: "no user with this email" });
      }
    } catch (error) {}
  };
}
module.exports = ForgetPasswordController;
