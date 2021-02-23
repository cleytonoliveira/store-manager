const connection = require('./connection');

const registerNewSale = async () => await connection();

module.exports = {
  registerNewSale,
};
