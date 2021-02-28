const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => await ProductsModel
  .registerNewProduct(name, quantity);

const getAllProducts = async () => await ProductsModel
  .getAllProducts();

const getProductById = async (productId) => {
  const productById = await ProductsModel
    .getProductById(productId);

  if (!productById) {
    return {
      error: true,
      message: 'Wrong id format'
    };
  }

  return productById;
};

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
