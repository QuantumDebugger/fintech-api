
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); 
const router = express.Router(); 

router.post('/register', registerUser); // POST /api/register
router.post('/login', loginUser);     // POST /api/login

module.exports = router; 
