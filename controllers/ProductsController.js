const { ProductsService } = require('../services');

const registerNewProduct = async (req, res) => {
  res.json(await ProductsService.registerNewProduct());
};

module.exports = {
  registerNewProduct,
};
