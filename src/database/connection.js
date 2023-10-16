const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/AlloMedia").then(() => {
  console.log("connected");
});

module.exports = mongoose;
