const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates schema for mango database
const liquorSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  bottleVolume: String,
  bottleCost: Number
});

const Liquor = mongoose.model("Liquor", liquorSchema);

module.exports = Liquor;