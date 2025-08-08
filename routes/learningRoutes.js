const express = require('express');
const { getModules, getLessonsByModule, getLessonById, trackLessonProgress } = require('../controllers/learningController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/modules', protect, getModules);
router.get('/modules/:moduleId/lessons', protect, getLessonsByModule);
router.get('/lessons/:lessonId', protect, getLessonById);
router.post('/lessons/:lessonId/track', protect, trackLessonProgress);

module.exports = router;