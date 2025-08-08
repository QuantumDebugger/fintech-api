const Investment = require('../models/Investment');
const User = require('../models/User');


const getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getInvestmentById = async (req, res) => {
  try {
    const investment = await Investment.findById(req.params.id);
    if (!investment) {
      return res.status(404).json({ message: 'Investment scheme not found' });
    }
    res.json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { getInvestments, getInvestmentById };