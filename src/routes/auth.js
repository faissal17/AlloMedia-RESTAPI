const express = require("express");
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("yes");
});

module.exports = authRouter;
