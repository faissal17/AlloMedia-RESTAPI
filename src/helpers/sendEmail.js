const express = require("express");
const nodmailer = require("nodemailer");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const sendEmail = async (email, subject, text) => {
  try {
    const transport = nodmailer.createTransport({
      host: process.env.PORT,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD,
      },
    });
    await transport.sendMail({
      from: "AlloMedia@gmail.com",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email send successufully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
