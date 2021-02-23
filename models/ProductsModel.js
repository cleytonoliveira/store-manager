const connection = require('./connection');
// const { ObjectId } = require('mongodb');

const registerNewProduct = async (name, quantity) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));

  return {
    id: insertedId,
    name,
    quantity,
  };
};

module.exports = {
  registerNewProduct,
};
