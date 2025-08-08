const express = require('express');
const { getFinancialTip } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.post(
  '/financial-tips',
  protect,
  [
    body('query', 'Query is required').not().isEmpty(),
    body('userProfile', 'User profile data is required').not().isEmpty(),
  ],
  getFinancialTip
);

module.exports = router;