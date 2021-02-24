const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => await ProductsModel
  .registerNewProduct(name, quantity);

const getAllProducts = async () => await ProductsModel
  .getAllProducts();

const getProductById = async (productId) => await ProductsModel
  .getProductById(productId);

const editProduct = async (id, name, quantity) => await ProductsModel
  .editProduct(id, name, quantity);

const removeProduct = async (productId) => await ProductsModel
  .removeProduct(productId);

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
  removeProduct,
};
