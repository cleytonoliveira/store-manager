const { ProductsService } = require('../services');
const rescue = require('express-rescue');

const CREATED = 201;

const registerNewProduct = rescue(async (req, res) => {
  const { name, quantity } = req.body;

  res
    .status(CREATED)
    .json(await ProductsService.registerNewProduct(name, quantity));
});

const getAllProducts = rescue(async (_req, res) => {
  res
    .status(200)
    .json(await ProductsService.getAllProducts());
});

const getProductById = rescue(async (req, res) => {
  const { id } = req.params;

  res
    .status(200)
    .json(await ProductsService.getProductById(id));
});

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
};
