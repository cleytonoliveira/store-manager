const { ProductsService } = require('../services');
const rescue = require('express-rescue');
const Boom = require('@hapi/boom');

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
    .json({ products: await ProductsService.getAllProducts() });
});

const getProductById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const ProductById = await ProductsService.getProductById(id);

  if (ProductById.error) {
    throw (Boom.badData(ProductById.message));
  }

  return res
    .status(SUCCESS)
    .json(ProductById);
});

const editProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, quantity} = req.body;

  res
    .status(SUCCESS)
    .json(await ProductsService.editProduct(id, name, quantity));
});

const removeProduct = rescue(async (req, res) => {
  const { id } = req.params;

  res
    .status(SUCCESS)
    .json(await ProductsService.removeProduct(id));
});

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
  removeProduct,
};
