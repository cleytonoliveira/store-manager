const { Router } = require('express');
const SalesRouter = Router();
const { SalesController } = require('../controllers');

// SalesRouter.post('/', SalesController);
SalesRouter.get('/', SalesController.registerNewSale);
// SalesRouter.get('/:id', SalesController);
// SalesRouter.put('/:id', SalesController);
// SalesRouter.delete('/:id', SalesController);

module.exports = SalesRouter;
