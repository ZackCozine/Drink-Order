const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates schema for mango database
const userSchema = new Schema({
  name: { type: String, required: true },
  password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;