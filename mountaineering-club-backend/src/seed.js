const mongoose = require('mongoose');
const Peak = require('./models/Peak');
const Climber = require('./models/Climber');
const Ascent = require('./models/Ascent');
const connectDB = require('./config/db');
require('dotenv').config();

const seed = async () => {
  await connectDB();

  // Clear existing data
  await Peak.deleteMany({});
  await Climber.deleteMany({});
  await Ascent.deleteMany({});

  // Seed peaks
  const peaks = [
    { name: 'Elbrus', height: 5642, country: 'Russia', region: 'Caucasus' },
    { name: 'Mont Blanc', height: 4808, country: 'France', region: 'Alps' },
  ];
  const savedPeaks = await Peak.insertMany(peaks);

  // Seed climbers
  const climbers = [
    { name: 'Alex Ivanov', address: 'Moscow', contact: 'alex@example.com' },
    { name: 'Marie Dubois', address: 'Chamonix', contact: 'marie@example.com' },
  ];
  const savedClimbers = await Climber.insertMany(climbers);

  // Seed ascents
  const ascents = [
    {
      startDate: new Date('2023-07-01'),
      peak: savedPeaks[0]._id,
      participants: [savedClimbers[0]._id, savedClimbers[1]._id],
    },
  ];
  await Ascent.insertMany(ascents);

  console.log('Database seeded');
  process.exit(0);
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});