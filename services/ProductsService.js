const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => await ProductsModel
  .registerNewProduct(name, quantity);

module.exports = {
  registerNewProduct,
};
