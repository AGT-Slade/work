// server/routes/authRoutes.js

const express = require('express');
const { registerUser, loginUser, forgotPassword, resetPassword, verifyEmail } = require('../controllers/authController');


const router = express.Router();

// Authentication routes
router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // Login a user
router.post('/forgot-password', forgotPassword); // Request password reset
router.post('/reset-password', resetPassword); // Reset password
router.get('/verify-email/:token', verifyEmail); // Verify email

module.exports = router;