const { validationResult } = require('express-validator');


const calculateFD = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { principal, rate, time } = req.body;
  const maturityAmount = principal * (1 + (rate / 100) * time);

  res.json({ maturityAmount: maturityAmount.toFixed(2) });
};


const calculateSIP = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { monthlyInvestment, annualRate, years } = req.body;

  const totalMonths = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  const estimatedReturn = monthlyInvestment * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));

  res.json({ estimatedReturn: estimatedReturn.toFixed(2) });
};

module.exports = { calculateFD, calculateSIP };