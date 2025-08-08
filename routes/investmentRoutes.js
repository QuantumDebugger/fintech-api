const express = require('express');
const { getInvestments, getInvestmentById } = require('../controllers/investmentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getInvestments);
router.get('/:id', protect, getInvestmentById);

module.exports = router;