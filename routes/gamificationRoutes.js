const express = require('express');
const { getQuizByLesson, submitQuizAnswers, getStreak } = require('../controllers/gamificationController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.get('/lessons/:lessonId/quiz', protect, getQuizByLesson);
router.post(
  '/lessons/:lessonId/quiz/submit',
  protect,
  [
    body('answers', 'Answers array is required').not().isEmpty(),
    body('answers.*.questionId', 'Question ID is required').isMongoId(),
    body('answers.*.answerId', 'Answer ID is required').isMongoId(),
  ],
  submitQuizAnswers
);
router.get('/streak', protect, getStreak);

module.exports = router;