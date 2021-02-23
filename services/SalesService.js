const { SalesService } = require('.');
const { SalesModel } = require('../models');

const registerNewSale = async () => await SalesModel.registerNewSale();

module.exports = {
  registerNewSale,
};