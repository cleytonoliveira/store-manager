const { ProductsController } = require('../controllers');
const { isValidProductName } = require('../middlewares');

const { Router } = require('express');
const ProductsRouter = Router();

ProductsRouter.post('/',
  isValidProductName,
  ProductsController.registerNewProduct
);
// ProductsRouter.get('/', ProductsController);
// ProductsRouter.get('/:id', ProductsController);
// ProductsRouter.put('/:id', ProductsController);
// ProductsRouter.delete('/:id', ProductsController);

module.exports = ProductsRouter;
