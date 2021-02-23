const { SalesService } = require('../services');

const registerNewSale = async (req, res) => {
  res.json(await SalesService.registerNewSale());
};

module.exports = {
  registerNewSale,
};