const express = require('express');
const { getFraudScenario, submitFraudDecision, getFraudScore } = require('../controllers/fraudController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.get('/scenarios/:id', protect, getFraudScenario);
router.post(
  '/scenarios/:id/submit',
  protect,
  [body('userChoice', 'User choice is required').not().isEmpty()],
  submitFraudDecision
);
router.get('/score', protect, getFraudScore);

module.exports = router;