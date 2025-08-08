const express = require('express');
const { calculateFD, calculateSIP } = require('../controllers/calculatorController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.post(
  '/fd',
  protect,
  [
    body('principal', 'Principal is required and must be a number').isNumeric(),
    body('rate', 'Rate is required and must be a number').isNumeric(),
    body('time', 'Time is required and must be a number').isNumeric(),
  ],
  calculateFD
);

router.post(
  '/sip',
  protect,
  [
    body('monthlyInvestment', 'Monthly investment is required and must be a number').isNumeric(),
    body('annualRate', 'Annual rate is required and must be a number').isNumeric(),
    body('years', 'Years is required and must be a number').isNumeric(),
  ],
  calculateSIP
);

module.exports = router;