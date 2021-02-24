const connection = require('./connection');

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
  .then((db) => db.collection('sales').find().toArray());

module.exports = {
  // registerNewSale,
  getAllSales,
};
