// require('dotenv').config();

const connectDB = require('./db/connectDB');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const startPopulateDB = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log('The DB is populated successfully.');
  } catch (err) {
    console.log(err);
  }
};

startPopulateDB();