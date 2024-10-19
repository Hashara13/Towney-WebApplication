const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  productionUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "production_user",
  },
});

const MyProfile = mongoose.model("myProfile", profileSchema);

module.exports = MyProfile;
