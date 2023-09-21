// controllers/productController.js
const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('product', { product });
};
// Implement more controller actions for adding/removing products
