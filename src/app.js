const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./config/db');
const productRouter = require('./routes/product');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productRouter);

// Start the server
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});