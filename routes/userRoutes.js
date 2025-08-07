const express = require('express');
const { getUserProfile, updateUserSettings } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/user/profile', protect, getUserProfile);
router.put('/user/settings', protect, updateUserSettings);

module.exports = router;