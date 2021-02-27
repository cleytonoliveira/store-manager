const connection = require('./connection');
const { ObjectId } = require('mongodb');

const registerNewSale = async (newSale) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('sales')
      .insertOne({ itensSold: newSale }));

  return {
    _id: insertedId,
    itensSold: newSale,
  };
};

const getAllSales = async () => await connection()
  .then((db) => db.collection('sales')
    .find().toArray());

const getSaleById = async (saleId) => await connection()
  .then((db) => db.collection('sales')
    .findOne(ObjectId(saleId)));

// const editSale = async (id, productId, quantity) => {
//   const { insertedId } = await connection()
//     .then((db) => db.collection('sales')
//       .updateOne(
//         { _id: ObjectId(id) },
//         { $set: { productId, quantity } },
//       ));
  
//   return {
//     _id: insertedId,
//     itensSold: [
//       {
//         productId,
//         quantity,
//       },
//     ],
//   };
// };

// const removeSale = async (saleId) => {
//   const { insertedId } = await connection()
//     .then((db) => db.collection('sales')
//       .deleteOne({ _id: ObjectId(saleId) }));
  
//   return {
//     _id: insertedId,
//   };
// };

module.exports = {
  registerNewSale,
  getAllSales,
  getSaleById,
  // editSale,
  // removeSale,
};
