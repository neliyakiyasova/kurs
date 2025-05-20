const express = require('express');
const router = express.Router();
const Ascent = require('../models/Ascent');
const Peak = require('../models/Peak');

// Get peak popularity stats
router.get('/peak-popularity', async (req, res) => {
  try {
    const stats = await Ascent.aggregate([
      { $group: { _id: '$peak', count: { $sum: 1 } } },
      { $lookup: { from: 'peaks', localField: '_id', foreignField: '_id', as: 'peak' } },
      { $unwind: '$peak' },
      { $project: { name: '$peak.name', count: 1 } },
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;