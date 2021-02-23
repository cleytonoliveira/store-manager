const connection = require('./connection');

const registerNewProduct = async () => await connection();

module.exports = {
  registerNewProduct,
};
