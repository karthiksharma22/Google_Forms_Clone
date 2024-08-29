const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("user", user);
