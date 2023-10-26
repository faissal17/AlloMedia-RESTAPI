const express = require("express");

class clientController {
  static getClient = async (req, res) => {
    const token = req.params.token;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const role = decodedToken.data.user.role.name;
    const name = decodedToken.data.user.name;
    res.json({ success: `hello ${name}, your role is ${role}` });
  };
}
module.exports = clientController;
