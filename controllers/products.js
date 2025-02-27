const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async errors')  //use this instead of next(error) w/ package, don't have to set up try/catch/next
//   res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
