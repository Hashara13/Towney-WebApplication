const mongoose = require('mongoose');

const production_userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthDate: { type: Date, required: true },
  availability: { type: String, required: true }, 
  time: { type: String, required: true }, 
  state: { type: String, required: true },
  rates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rates' }]
});

const Production_userModel = mongoose.model('production_user', production_userSchema);

module.exports = Production_userModel;
