const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const peakRoutes = require('./routes/peaks');
const climberRoutes = require('./routes/climbers');
const ascentRoutes = require('./routes/ascents');
const authRoutes = require('./routes/auth');
const statsRoutes = require('./routes/stats');
const { auth } = require('./middleware/auth'); // Import auth middleware
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes); // No auth middleware on auth routes
app.use('/api/peaks', auth, peakRoutes); // Apply auth to peaks
app.use('/api/climbers', auth, climberRoutes); // Apply auth to climbers
app.use('/api/ascents', auth, climberRoutes); // Apply auth to ascents (corrected to ascentRoutes)
app.use('/api/stats', statsRoutes); // No auth needed for stats

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const peakRoutes = require('./routes/peaks');
const climberRoutes = require('./routes/climbers');
const ascentRoutes = require('./routes/ascents');
const authRoutes = require('./routes/auth');
const statsRoutes = require('./routes/stats');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

connectDB();

app.use('/api/peaks', peakRoutes);
app.use('/api/climbers', climberRoutes);
app.use('/api/ascents', ascentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/stats', statsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/


/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const peakRoutes = require('./routes/peaks');
const climberRoutes = require('./routes/climbers');
const ascentRoutes = require('./routes/ascents');
const authRoutes = require('./routes/auth');
const statsRoutes = require('./routes/stats');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/peaks', peakRoutes);
app.use('/api/climbers', climberRoutes);
app.use('/api/ascents', ascentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/stats', statsRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/