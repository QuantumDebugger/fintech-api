
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes'); 
const { protect } = require('./middleware/authMiddleware'); 

dotenv.config(); 

connectDB(); 

const app = express(); 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', authRoutes);

app.get('/api/protected', protect, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}! You accessed a protected route.` });
});

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
