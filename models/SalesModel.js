const connection = require('./connection');
const { ObjectId } = require('mongodb');

// const registerNewSale = async (productId, quantity) => {
//   const { insertedId } = await connection()
//     .then((db) => db.collection('sales')
//       .insertOne({ productId, quantity }));

//   return {
//     _id: insertedId,
//     productId,
//   };
// };

const getAllSales = async () => await connection()
  .then((db) => db.collection('sales')
    .find().toArray());

const getSaleById = async (saleId) => await connection()
  .then((db) => db.collection('sales')
    .findOne(ObjectId(saleId)));

module.exports = {
  // registerNewSale,
  getAllSales,
  getSaleById,
};
