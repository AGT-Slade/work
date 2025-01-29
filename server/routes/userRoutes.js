// server/routes/userRoutes.js
const express = require('express');
const { protect } = require('../middleware/authMiddleware'); // Authentication middleware
const { getProfile, updateProfile, deleteProfile } = require('../controllers/userController');

const router = express.Router();

// Protect all routes below this middleware
router.use(protect);

// User routes
router.get('/profile', getProfile); // Get user profile
router.put('/profile', updateProfile); // Update user profile
router.delete('/profile', deleteProfile); // Delete user profile

module.exports = router;