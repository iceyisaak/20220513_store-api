

const getAllProductsStatic = async (res, req) => {
  res.status(200).json({ msg: 'Product Testing Route' });
};

const getAllProducts = async (res, req) => {
  res.status(200).json({ msg: "Products Route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts
};