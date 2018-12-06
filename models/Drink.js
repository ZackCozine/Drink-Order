const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates schema for mango database
const recipeLiquorSchema = new Schema({ 
  name: String,
  volume: Number
 });

//  const mixerSchema = new Schema({ 
//   name: String,
//   volume: Number
//  });

//  const garnishSchema = new Schema({ 
//   name: String,
//   quantity: Number
//  });

// const recipeSchema = new Schema({
//   name: { type: String, required: true },
//   liquors: [recipeLiquorSchema],
//   mixers: [mixerSchema],
//   garnishes: [garnishSchema],
//   glassType: String,
//   prep: String,
//   cost: Number,
//   price: Number
// });

const drinkSchema = new Schema({
  name: { type: String, required: true },
  liquors: [recipeLiquorSchema],
  mixers: String,
  garnishes: String,
  glassType: String,
  prep: String,
  cost: Number,
  price: Number
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;