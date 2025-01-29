// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true, // Removes unnecessary whitespace
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true, // Ensures email is unique
      trim: true,
      lowercase: true, // Converts email to lowercase
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex validation
        'Please provide a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false, // Excludes password from query results by default
    },
    verificationToken: {
      type: String,
      select: false, // Exclude verification token from query results by default
    },
    isVerified: {
      type: Boolean,
      default: false, // Email verification status
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Restricts role to specific values
      default: 'user',
    },
    passwordResetToken: String, // For password reset functionality
    passwordResetExpires: Date, // Expiry time for reset token
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets the creation date
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password isn't modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;