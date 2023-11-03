const express = require("express");

class livreurController {
  static getLivreur = async (req, res) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
      const { userRole, email, name } = decodeToken;
      return res.status(200).json({ userName: "hello " + name, userRole });
    } catch (error) {
      res.json({ status: "error", messgae: error });
    }
  };
}
module.exports = livreurController;
