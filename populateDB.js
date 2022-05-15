require('dotenv').config();

const connectDB = require('./db/connectDB');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const startPopulateDB = async () => {

  try {
    await connectDB(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('The DB is populated successfully.');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startPopulateDB();