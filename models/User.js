const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //Need to get User data from Auth0
    name: { type: String, required: true },
    id: {type: Number, required: true} 
  });
  
const User = mongoose.model("User", userSchema);

module.exports = User;