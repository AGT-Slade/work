// server/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
     //useNewUrlParser: true,
   // useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');

    // Event listener for successful connection
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });

    // Event listener for connection errors
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    // Event listener for disconnections
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from DB');
    });

    // Close the Mongoose connection when the Node process ends
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('Mongoose connection closed due to app termination');
      process.exit(0);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;