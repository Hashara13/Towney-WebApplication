const mongoose = require('mongoose');

const ScriptSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true }, 
  genre: { type: String, required: true }, 
  scriptFile: { type: String, required: true }, 
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'production_user' }, 
  budget: { type: Number, required: true }, 
  location: { type: String, required: true }, 
  crewPositions: [{ 
    role: { type: String, required: true }, 
    description: { type: String }, 
    isFilled: { type: Boolean, default: false },
  }],
  productionStartDate: { type: Date, required: true }, 
  productionEndDate: { type: Date, required: true }, 
  status: { 
    type: String, 
    enum: ['Open', 'Closed', 'In Progress', 'Completed'], 
    default: 'Open' 
  },
  datePosted: { type: Date, default: Date.now },
});

const ScriptPost = mongoose.model('ScriptPost', ScriptSchema);

module.exports = ScriptPost;
