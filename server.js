const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const learningRoutes = require('./routes/learningRoutes');
const gamificationRoutes = require('./routes/gamificationRoutes'); 
const { protect } = require('./middleware/authMiddleware');
const helmet = require('helmet');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/learning', learningRoutes); 
app.use('/api/gamification', gamificationRoutes); 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});