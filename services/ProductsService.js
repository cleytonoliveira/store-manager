const { ProductsModel } = require('../models');

const registerNewProduct = async (name, quantity) => {
  ProductsModel
    .registerNewProduct(name, quantity);
};

module.exports = {
  registerNewProduct,
};
