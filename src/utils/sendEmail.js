const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const sendEmail = async (email) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: 2525,
      auth: {
        user: "c404e95b4d8947",
        pass: "cb3f96913c7600",
      },
    });
    await transport.sendMail({
      from: "AlloMedia@gmail.com",
      to: email,
      subject: "Reset Password",
      text: "hiiiiiiiiiiiiiii",
    });
    console.log("email send successufully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
