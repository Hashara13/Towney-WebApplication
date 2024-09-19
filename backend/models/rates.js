const mongoose = require("mongoose");

const RatesSchema = new mongoose.Schema({
  dailyR: { type: String, required: true },
  overR: { type: Number, required: true },
  hourlyR: { type: Date, required: true },
  accom: { type: String, required: true },
  travel: { type: String, required: true },
  comm: { type: String, required: true },
  productionUser: { type: mongoose.Schema.Types.ObjectId, ref: 'Production_user' }
});

const Rates = mongoose.model("rates", RatesSchema);

module.exports = Rates;
