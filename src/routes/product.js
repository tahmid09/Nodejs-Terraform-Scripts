const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Product = require('../models/product');
const { jwtSecret } = require('../config/db');

// Middleware to check for authentication
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
}

// Get all products (requires authentication)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product (requires authentication)
router.post('/', authenticateToken, async (req, res) => {
  // ... existing code ...
});

// Other CRUD routes go here...



module.exports = router;