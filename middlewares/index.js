const isValidQuantityProduct = require('./isValidQuantityProduct');
const isValidNumberQuantity = require('./isValidNumberQuantity');
const isValidProductName = require('./isValidProductName');
const error = require('./error');

module.exports = {
  error,
  isValidProductName,
  isValidQuantityProduct,
  isValidNumberQuantity,
};
