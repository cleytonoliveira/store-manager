const { Router } = require('express');
const SalesRouter = Router();
const { SalesController } = require('../controllers');

SalesRouter.post('/',
  SalesController.registerNewSale
);
SalesRouter.get('/',
  SalesController.getAllSales,
);
SalesRouter.get('/:id',
  SalesController.getSaleById,
);
SalesRouter.put('/:id',
  SalesController.editSale,
);
SalesRouter.delete('/:id',
  SalesController.removeSale,
);

module.exports = SalesRouter;
