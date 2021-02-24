const connection = require('./connection');
const { ObjectId } = require('mongodb');

const registerNewProduct = async (name, quantity) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));

  return {
    id: insertedId,
    name,
    quantity,
  };
};

const getAllProducts = async () => await connection()
  .then((db) => db.collection('products').find().toArray());

const getProductById = async (productId) => await connection()
  .then((db) => db.collection('products').findOne(ObjectId(productId)));

const editProduct = async (id, name, quantity) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products').updateOne(
      { _id: ObjectId(id) },
      { $set: { name, quantity } }
    ));
  
  return {
    id: insertedId,
    name,
    quantity,
  };
};

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
};
