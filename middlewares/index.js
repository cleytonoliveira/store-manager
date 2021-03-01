const isValidQuantityProduct = require('./isValidQuantityProduct');
const isValidNumberQuantity = require('./isValidNumberQuantity');
const isValidProductName = require('./isValidProductName');
const isValidSale = require('./isValidSale');
const error = require('./error');

module.exports = {
  error,
  isValidSale,
  isValidProductName,
  isValidQuantityProduct,
  isValidNumberQuantity,
};
