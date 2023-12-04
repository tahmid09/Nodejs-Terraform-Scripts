const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { jwtSecret, generateToken } = require('../config/db');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    // Generate and send JWT token
    const accessToken = generateToken({ username });
    res.status(201).json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Check if the password is correct (you may want to use bcrypt for secure password hashing)
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate and send JWT token
      const accessToken = generateToken({ username });
      res.json({ accessToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;