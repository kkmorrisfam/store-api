const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  
  const products = await Product.find({}).sort('-name price').select(name price)
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  
  const { featured, company, name, sort, fields } = req.query; // this will limit what the query is looking for
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);
  let result = Product.find(queryObject)
  
  //sort
  if(sort) {
    const sortList = sort.split(',').join(' ') //split on comma from query string, change to space for syntax
    result = result.sort(sortList)
  } else {
    result = result.sort(createdAt)
  }
  
  //select
  if(fields) {
    const fieldsList = fields.split(',').join(' ')
    result = result.select(fieldsList)
  }
  
  //set up await when we have the complete result
  const products = await result

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
