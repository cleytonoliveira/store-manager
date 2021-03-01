const { Router } = require('express');
const SalesRouter = Router();
const { SalesController } = require('../controllers');
const { isValidSale } = require('../middlewares');

SalesRouter.post('/',
  isValidSale,
  SalesController.registerNewSale
);
SalesRouter.get('/',
  SalesController.getAllSales,
);
SalesRouter.get('/:id',
  SalesController.getSaleById,
);
SalesRouter.put('/:id',
  isValidSale,
  SalesController.editSale,
);
SalesRouter.delete('/:id',
  SalesController.removeSale,
);

module.exports = SalesRouter;
