const { SalesModel } = require('../models');

const registerNewSale = async (newSale) => await SalesModel
  .registerNewSale(newSale);

const getAllSales = async () => await SalesModel
  .getAllSales();

const getSaleById = async (saleId) => await SalesModel
  .getSaleById(saleId);

// const editSale = async (id, productId, quantity) => await SalesModel
//   .editSale(id, productId, quantity);

// const removeSale = async (saleId) => await SalesModel
//   .removeSale(saleId);

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  // editSale,
  // removeSale,
};