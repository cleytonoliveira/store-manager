const connection = require('./connection');
const { ObjectId } = require('mongodb');

const registerNewProduct = async (name, quantity) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));

  return {
    _id: insertedId,
    name,
    quantity,
  };
};

const getAllProducts = async () => await connection()
  .then((db) => db.collection('products')
    .find().toArray());

const getProductById = async (productId) => {
  if(!ObjectId.isValid(productId)) return null;

  return await connection()
    .then((db) => db.collection('products')
      .findOne(ObjectId(productId)));
};

const editProduct = async (id, name, quantity) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products')
      .updateOne(
        { _id: ObjectId(id) },
        { $set: { name, quantity } }
      ));
  
  return {
    _id: insertedId,
    name,
    quantity,
  };
};

const removeProduct = async (productId) => {
  if(!ObjectId.isValid(productId)) return null;
  
  const { value: { _id, name, quantity } } = await connection()
    .then((db) => db.collection('products')
      .findOneAndDelete({ _id: ObjectId(productId) }));

  return {
    _id,
    name,
    quantity,
  };
};

module.exports = {
  registerNewProduct,
  getAllProducts,
  getProductById,
  editProduct,
  removeProduct,
};
