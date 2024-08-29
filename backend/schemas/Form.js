const mongoose = require("mongoose");

const form = new mongoose.Schema({
  title: String,
  creator: String,
  desc: String,
  questions: Array,
  responses: Array,
});

module.exports = mongoose.model("formdata", form);
