const { SalesService } = require('../services');
const rescue = require('express-rescue');
const Boom = require('@hapi/boom');

const SUCCESS = 200;

const registerNewSale = rescue(async (req, res) => {
  const newSale = req.body;

  res
    .status(SUCCESS)
    .json(await SalesService.registerNewSale(newSale));
});

const getAllSales = rescue(async (_req, res) => {
  res
    .status(SUCCESS)
    .json({ sales: await SalesService.getAllSales() });
});

const getSaleById = rescue(async (req, res) => {
  const { id } = req.params;

  const saleById = await SalesService.getSaleById(id);

  if (saleById.error) {
    throw Boom.notFound(saleById.message);
  }

  res
    .status(SUCCESS)
    .json(saleById);
});

const editSale = rescue(async (req, res) => {
  const { id } = req.params;
  const saleToUpdate= req.body;

  res
    .status(SUCCESS)
    .json(await SalesService.editSale(id, saleToUpdate));
});

const removeSale = rescue(async (req, res) => {
  const { id } = req.params;

  const saleById = await SalesService.removeSale(id);

  if(saleById.error) {
    throw Boom.badData(saleById.message);
  }

  return res
    .status(SUCCESS)
    .json(saleById);
});

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  editSale,
  removeSale,
};
