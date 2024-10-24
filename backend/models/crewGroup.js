const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'production_user' }]
})

const CrewGroup = mongoose.model('crewGroup', GroupSchema)
module.exports = CrewGroup;