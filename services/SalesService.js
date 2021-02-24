const { SalesService } = require('.');
const { SalesModel } = require('../models');

// const registerNewSale = async (productId, quantity) => {
//   const sale = await SalesModel
//     .registerNewSale(productId, quantity);

//   return sale;
// };

const getAllSales = async () => await SalesModel
  .getAllSales();

const getSaleById = async (saleId) => await SalesModel
  .getSaleById(saleId);

module.exports = {
  // registerNewSale,
  getAllSales,
  getSaleById,
};