const express = require('express');
const router = express.Router();
const Peak = require('../models/Peak');
const { auth, admin } = require('../middleware/auth');

// Get all peaks
router.get('/', async (req, res) => {
  try {
    const peaks = await Peak.find();
    res.json(peaks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a peak (admin only)
router.post('/', auth, admin, async (req, res) => {
  const { name, height, country, region } = req.body;
  try {
    const peak = new Peak({ name, height, country, region });
    await peak.save();
    res.status(201).json(peak);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a peak (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const peak = await Peak.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!peak) return res.status(404).json({ message: 'Peak not found' });
    res.json(peak);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a peak (admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    const peak = await Peak.findByIdAndDelete(req.params.id);
    if (!peak) return res.status(404).json({ message: 'Peak not found' });
    res.json({ message: 'Peak deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;