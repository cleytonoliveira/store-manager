const { ProductsService } = require('../services');
const CREATED = 201;

const registerNewProduct = async (req, res) => {
  const { name, quantity } = req.body;

  res.status(CREATED).json(await ProductsService.registerNewProduct(name, quantity));
};

module.exports = {
  registerNewProduct,
};
