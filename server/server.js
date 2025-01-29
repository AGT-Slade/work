// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes/index');
const path = require("path");

dotenv.config();
connectDB();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Invalid JSON data' });
  }
  next();
});


app.use(express.json());

// Routes
app.use('/api', routes);


// Serve static files from React build
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });    
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});