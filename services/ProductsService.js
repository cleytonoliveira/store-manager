const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => {
  const productStock = await ProductsModel.getAllProducts();

  const productAlreadyExist = productStock.some(product => product.name === name);

  if (productAlreadyExist) {
    return {
      error: true,
      message: 'Product already exists',
    };
  }

  return await ProductsModel
    .registerNewProduct(name, quantity);
};

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

const removeProduct = async (productId) => {
  const productById = await ProductsModel
    .removeProduct(productId);
  
  if (!productById) {
    return {
      error: true,
      message: 'Wrong id format'
    };
  }

  return productById;
};

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
  removeProduct,
};
