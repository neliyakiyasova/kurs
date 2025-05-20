const mongoose = require('mongoose');

const climberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  contact: { type: String },
  ascents: [{
    peak: { type: mongoose.Schema.Types.ObjectId, ref: 'Peak' },
    date: { type: Date },
    group: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Climber', climberSchema);