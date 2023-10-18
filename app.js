const express = require("express");
const mongoose = require("./src/database/connection");
const authRouter = require("./src/routes/auth");
const dotenv = require("dotenv");
const User = require("./src/models/User");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000);
