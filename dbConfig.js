const mongodb = require('mongodb');
require('dotenv').config()
const MongoClient = mongodb.MongoClient;
const dbUrl = `${process.env.DB_URL}/${process.env.MONGODB_DB_NAME}`
const dbName = process.env.MONGODB_DB_NAME
module.exports ={dbName,dbUrl,mongodb,MongoClient};