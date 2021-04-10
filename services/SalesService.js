const { SalesModel, ProductsModel } = require('../models');

const registerNewSale = async (newSale) => {
  let isProductInStock = true;

  const verifyProductInStock = newSale.map(async (sale) => {
    const minQuantity = 0;

    const { quantity } = await ProductsModel
      .getProductById(sale.productId);

    const quantityDifference = quantity - sale.quantity;

    if (quantityDifference < minQuantity) return isProductInStock = false;

    return await ProductsModel
      .subtractQuantityProduct(sale.productId, sale.quantity);
  });

  await Promise.all(verifyProductInStock);

  if (!isProductInStock) {
    return {
      error: true,
      code: 'stock_problem',
      message: 'Such amount is not permitted to sell',
    };
  }

  return await SalesModel
    .registerNewSale(newSale);
};

const getAllSales = async () => await SalesModel
  .getAllSales();

const getSaleById = async (saleId) => {
  const saleById = await SalesModel
    .getSaleById(saleId);

  if (!saleById) {
    return {
      error: true,
      message: 'Sale not found',
    };
  }

  return saleById;
};

const editSale = async (id, saleToUpdate) => {
  return await SalesModel
    .editSale(id, saleToUpdate);
};

const removeSale = async (saleId) => {
  const saleById = await SalesModel
    .removeSale(saleId);
  
  if(!saleById) {
    return {
      error: true,
      message: 'Wrong sale ID format',
    };
  }

  saleById.itensSold.forEach(async (product) => {
    await ProductsModel.sumQuantityProduct(product.productId, product.quantity);
  });

  return saleById;
};

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  editSale,
  removeSale,
};