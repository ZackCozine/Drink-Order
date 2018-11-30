const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates schema for mango database
const recipeLiquorSchema = new Schema({ 
  name: String,
  volume: Number
 });

 const mixerSchema = new Schema({ 
  name: String,
  volume: Number
 });

 const garnishSchema = new Schema({ 
  name: String,
  quantity: Number
 });

const recipeSchema = new Schema({
  name: { type: String, required: true },
  liquor: [recipeLiquorSchema],
  mixers: [mixerSchema],
  granish: [garnishSchema],
  glassType: String,
  prep: String,
  cost: Number,
  price: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;