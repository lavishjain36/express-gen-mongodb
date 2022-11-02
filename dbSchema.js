const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
let dbName='b1';
let dbUrl=`mongodb+srv://jainmonula:utenv6iZVPLyW2Ps@cluster0.ctjevst.mongodb.net/test??authSource=admin&replicaSet=atlas-f5cue6-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
module.exports={mongodb,MongoClient,dbUrl,dbName};