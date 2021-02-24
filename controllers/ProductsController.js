const { ProductsService } = require('../services');
const rescue = require('express-rescue');

const CREATED = 201;
const SUCCESS = 200;

const registerNewProduct = rescue(async (req, res) => {
  const { name, quantity } = req.body;

  res
    .status(CREATED)
    .json(await ProductsService.registerNewProduct(name, quantity));
});

const getAllProducts = rescue(async (_req, res) => {
  res
    .status(SUCCESS)
    .json(await ProductsService.getAllProducts());
});

const getProductById = rescue(async (req, res) => {
  const { id } = req.params;

  res
    .status(SUCCESS)
    .json(await ProductsService.getProductById(id));
});

const editProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, quantity} = req.body;

  res
    .status(SUCCESS)
    .json(await ProductsService.editProduct(id, name, quantity));
});

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
};
