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

 const recipeLiquor = mongoose.model("recipeLiquor", recipeLiquorSchema);
 const mixer = mongoose.model("mixer", mixerSchema);
 const garnish = mongoose.model("garnish", garnishSchema);

const recipeSchema = new Schema({
  name: { type: String, required: true },
  liquor: [recipeliquor],
  mixers: [mixer],
  granish: [garnish],
  glassType: String,
  prep: String,
  cost: Number,
  price: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = recipeLiquor;
module.exports = mixer;
module.exports = garnish;
module.exports = Recipe;