const express = require("express");
const mongoose = require("./src/database/connection");
const authRouter = require("./src/routes/auth");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const User = require("./src/models/User");

dotenv.config();

const app = express();

app.use(bodyParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000);
