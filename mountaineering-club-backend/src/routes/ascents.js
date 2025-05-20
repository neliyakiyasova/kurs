const express = require('express');
const router = express.Router();
const Ascent = require('../models/Ascent');
const { auth, admin } = require('../middleware/auth');

// Get all ascents with filters
router.get('/', async (req, res) => {
  const { startDate, peak, country } = req.query;
  try {
    let query = {};
    if (startDate) query.startDate = { $gte: new Date(startDate) };
    if (peak) query.peak = peak;
    if (country) {
      const peaks = await require('../models/Peak').find({ country });
      query.peak = { $in: peaks.map(p => p._id) };
    }
    const ascents = await Ascent.find(query).populate('peak participants');
    res.json(ascents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an ascent (admin only)
router.post('/', auth, admin, async (req, res) => {
  const { startDate, endDate, peak, participants } = req.body;
  try {
    const ascent = new Ascent({ startDate, endDate, peak, participants });
    await ascent.save();
    res.status(201).json(ascent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an ascent (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const ascent = await Ascent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ascent) return res.status(404).json({ message: 'Ascent not found' });
    res.json(ascent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an ascent (admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    const ascent = await Ascent.findByIdAndDelete(req.params.id);
    if (!ascent) return res.status(404).json({ message: 'Ascent not found' });
    res.json({ message: 'Ascent deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;