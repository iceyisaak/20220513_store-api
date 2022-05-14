const getAllProductsStatic = async (req, res) => {
  throw new Error('testing async error');
  res.status(200).json({ msg: 'Product Testing Route' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products Route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic
};