const mongoose = require('mongoose');

const production_userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthDate: { type: Date, required: true },
  availability: { type: String, required: true }, 
  time: { type: String, required: true }, 
  state: { type: String, required: true } 
});

const production_userModel = mongoose.model('production_user', production_userSchema);

module.exports = production_userModel;
