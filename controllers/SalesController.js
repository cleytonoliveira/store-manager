const { SalesService } = require('../services');
const rescue = require('express-rescue');

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

  res
    .status(SUCCESS)
    .json(await SalesService.getSaleById(id));
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

  res
    .status(SUCCESS)
    .json(await SalesService.removeSale(id));
});

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  editSale,
  removeSale,
};