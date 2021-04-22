const mongoose = require('mongoose');
const LoginModel = require('../models/LoginModel');

async function connect(URI) {
  try {
    await mongoose.connect(`${URI}`);
    // Print success message
    console.log(`Chronos MongoDB is connected at ${URI.slice(0, 20)}...`);
  } catch ({ message }) {
    // Print error message
    console.log('Error connecting to MongoDB:', message);
  }
}
