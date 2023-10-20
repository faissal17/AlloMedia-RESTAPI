const express = require("express");
const ResetPassworRouter = express.Router();
const ResetPassworController = require("../controllers/ResetPasswordController");

ResetPassworRouter.post(
  "/resetpassword/:token",
  ResetPassworController.resetPassword
);

module.exports = ResetPassworRouter;
