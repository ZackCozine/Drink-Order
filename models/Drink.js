const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates schema for mango database
// const recipeLiquorSchema = new Schema({ 
//   name: String,
//   volume: Number
//  });

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
//   liquor: [recipeLiquorSchema],
//   mixers: [mixerSchema],
//   granish: [garnishSchema],
//   glassType: String,
//   prep: String,
//   cost: Number,
//   price: Number
// });

const drinkSchema = new Schema({
  name: { type: String, required: true }, 
  liq1: String,
  lv1: Number,
  liq2: String,
  lv2: Number,
  liq3: String,
  lv3: Number,
  liq4: String,
  lv4: Number,
  liq5: String,
  lv5: Number,
  Mix1: String,
  Mlv1: Number,
  Mix2: String,
  Mlv2: Number,
  Glass:  String,
  Garnish: String,
  Instructions: String
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;