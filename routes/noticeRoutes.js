const express = require('express');
const { getPressReleases, getPressReleaseById } = require('../controllers/noticeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/press-releases', protect, getPressReleases);
router.get('/press-releases/:id', protect, getPressReleaseById);

module.exports = router;