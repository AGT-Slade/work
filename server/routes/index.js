// server/routes/index.js
const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Combine all routes
router.use('/auth', authRoutes); // Authentication routes
router.use('/users', userRoutes); // User-related routes

module.exports = router;