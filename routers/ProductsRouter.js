const { Router } = require('express');
const ProductsRouter = Router();
const { ProductsController } = require('../controllers');

// ProductsRouter.post('/', ProductsController);
ProductsRouter.get('/', ProductsController.registerNewProduct);
// ProductsRouter.get('/:id', ProductsController);
// ProductsRouter.put('/:id', ProductsController);
// ProductsRouter.delete('/:id', ProductsController);

module.exports = ProductsRouter;
