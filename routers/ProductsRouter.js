const { ProductsController } = require('../controllers');
// const {
  // isValidQuantityProduct, 
  // isValidNumberQuantity,
  // isValidProductName} = require('../middlewares');
  
const { Router } = require('express');
const ProductsRouter = Router();

ProductsRouter.post('/',
  // isValidProductName,
  // isValidQuantityProduct,
  // isValidNumberQuantity,
  ProductsController.registerNewProduct
);
ProductsRouter.get('/',
  ProductsController.getAllProducts
);
ProductsRouter.get('/:id',
  ProductsController.getProductById
);
ProductsRouter.put('/:id',
  ProductsController.editProduct
);
ProductsRouter.delete('/:id',
  ProductsController.removeProduct
);

module.exports = ProductsRouter;
