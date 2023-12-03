const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const dbUrl = 'mongodb://localhost:27017/productInventoryDB';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

const jwtSecret = 'your-secret-key'; // Change this with a secure secret key

module.exports = {
  mongoose,
  jwtSecret,
  db, // Include the connection object for use in app.js
  generateToken: (user) => {
    return jwt.sign(user, jwtSecret, { expiresIn: '1h' }); // Token expires in 1 hour
  },
};