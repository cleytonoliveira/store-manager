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

const editSale = async (id, saleToUpdate) => {
  const { value } = await connection()
    .then((db) => db.collection('sales')
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { itensSold: saleToUpdate } },
        { returnOriginal: false },
      ));

  return value;
};

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
  editSale,
  // removeSale,
};
