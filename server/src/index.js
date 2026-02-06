require('dotenv').config({ override: true });

const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes.js'); // si ton projet utilise .js partout

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'], 
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes auth
app.use('/api/auth', authRoutes);

// Listen
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
