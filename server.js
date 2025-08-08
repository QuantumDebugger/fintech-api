const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const learningRoutes = require('./routes/learningRoutes');
const gamificationRoutes = require('./routes/gamificationRoutes');
const aiRoutes = require('./routes/aiRoutes'); 
const investmentRoutes = require('./routes/investmentRoutes'); 
const fraudRoutes = require('./routes/fraudRoutes'); 
const calculatorRoutes = require('./routes/calculatorRoutes'); 
const noticeRoutes = require('./routes/noticeRoutes'); 

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
app.use('/api/ai', aiRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/fraud', fraudRoutes); 
app.use('/api/calculators', calculatorRoutes);
app.use('/api/notices', noticeRoutes); 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});