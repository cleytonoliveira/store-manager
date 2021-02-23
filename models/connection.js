const { MongoClient } = require('mongodb');
require('dotenv').config();
const { IS_LOCAL } = process.env;

const MONGO_DB_URL = (IS_LOCAL)
  ? 'mongodb://localhost:27017/StoreManager'
  : 'mongodb://mongodb:27017/StoreManager';

const DB_NAME = 'StoreManager';

const connection = async () => await MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((connection) => connection.db(DB_NAME));

module.exports = connection;
