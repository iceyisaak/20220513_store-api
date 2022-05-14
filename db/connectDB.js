const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectDB;