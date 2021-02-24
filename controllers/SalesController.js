const { SalesService } = require('../services');
const rescue = require('express-rescue');

const SUCCESS = 200;

// const registerNewSale = rescue(async (req, res) => {
//   const { productId, quantity } = req.body;

//   res
//     .status(SUCCESS)
//     .json(await SalesService.registerNewSale(productId, quantity));
// });

const getAllSales = rescue(async (_req, res) => {
  res
    .status(SUCCESS)
    .json({ sales: await SalesService.getAllSales() });
});

module.exports = {
  // registerNewSale,
  getAllSales,
};