const { validationResult } = require('express-validator');
const User = require('../models/User');


const getFinancialTip = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userProfile, query } = req.body;
  try {
    const prompt = `Based on the following user profile: ${JSON.stringify(userProfile)} and their query: "${query}", provide a personalized financial tip.`;
    
    // Placeholder
    const aiResponse = await new Promise(resolve => setTimeout(() => {
      resolve({ text: "Based on your profile, consider starting a small SIP plan to build a consistent savings habit." });
    }, 1000));
    
    res.json({ tip: aiResponse.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error from AI service' });
  }
};

module.exports = { getFinancialTip };