const mongoose = require('mongoose');

const peakSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: { type: Number, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Peak', peakSchema);