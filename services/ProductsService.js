const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => await ProductsModel
  .registerNewProduct(name, quantity);

const getAllProducts = async () => await ProductsModel.getAllProducts();

const getProductById = async (productId) => await ProductsModel.getProductById(productId);

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
};
