const { ProductsModel } = require('../models');

const registerNewProduct = async () => await ProductsModel.registerNewProduct();

module.exports = {
  registerNewProduct,
};
