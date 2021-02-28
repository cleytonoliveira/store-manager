const { SalesModel } = require('../models');

const registerNewSale = async (newSale) => await SalesModel
  .registerNewSale(newSale);

const getAllSales = async () => await SalesModel
  .getAllSales();

const getSaleById = async (saleId) => await SalesModel
  .getSaleById(saleId);

const editSale = async (id, saleToUpdate) => {
  return await SalesModel
    .editSale(id, saleToUpdate);
};

const removeSale = async (saleId) => await SalesModel
  .removeSale(saleId);

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  editSale,
  removeSale,
};