
const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv');

dotenv.config(); 

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// @route   POST /api/register
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
  
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    
    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        message: 'User registered successfully',
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   POST /api/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });

    
    if (user && (await user.matchPassword(password))) {
      res.json({
        message: 'Logged in successfully',
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' }); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };