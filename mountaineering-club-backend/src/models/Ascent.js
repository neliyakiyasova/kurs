const mongoose = require('mongoose');

const ascentSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  peak: { type: mongoose.Schema.Types.ObjectId, ref: 'Peak', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Climber' }],
}, { timestamps: true });

module.exports = mongoose.model('Ascent', ascentSchema);