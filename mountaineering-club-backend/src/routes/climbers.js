const express = require('express');
const router = express.Router();
const Climber = require('../models/Climber');
const { auth, admin } = require('../middleware/auth');

// Get all climbers
router.get('/', async (req, res) => {
  try {
    const climbers = await Climber.find().populate('ascents.peak');
    res.json(climbers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a climber by ID
router.get('/:id', async (req, res) => {
  try {
    const climber = await Climber.findById(req.params.id).populate('ascents.peak');
    if (!climber) return res.status(404).json({ message: 'Climber not found' });
    res.json(climber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a climber (admin only)
router.post('/', auth, admin, async (req, res) => {
  const { name, address, contact, ascents } = req.body;
  try {
    const climber = new Climber({ name, address, contact, ascents });
    await climber.save();
    res.status(201).json(climber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a climber (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const climber = await Climber.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!climber) return res.status(404).json({ message: 'Climber not found' });
    res.json(climber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a climber (admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    const climber = await Climber.findByIdAndDelete(req.params.id);
    if (!climber) return res.status(404).json({ message: 'Climber not found' });
    res.json({ message: 'Climber deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;