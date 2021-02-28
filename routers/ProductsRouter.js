const { ProductsController } = require('../controllers');
const {
  isValidQuantityProduct, 
  isValidNumberQuantity,
  isValidProductName} = require('../middlewares');
  
const { Router } = require('express');
const ProductsRouter = Router();

ProductsRouter.post('/',
  isValidProductName,
  isValidNumberQuantity,
  isValidQuantityProduct,
  ProductsController.registerNewProduct
);
ProductsRouter.get('/',
  ProductsController.getAllProducts
);
ProductsRouter.get('/:id',
  ProductsController.getProductById
);
ProductsRouter.put('/:id',
  isValidProductName,
  isValidNumberQuantity,
  isValidQuantityProduct,
  ProductsController.editProduct
);
ProductsRouter.delete('/:id',
  ProductsController.removeProduct
);

module.exports = ProductsRouter;
