const express = require("express");
const authRouter = require("./src/routes/auth");
const dotenv = require("dotenv");
const mongoose = require("./src/database/connection");
const bodyParser = require("body-parser");
const forgetPassRouter = require("./src/routes/forgetPassword");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/auth", forgetPassRouter);

app.get("/", (req, res) => {
  res.send("hey");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
