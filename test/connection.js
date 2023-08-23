const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongo = null;
 
const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
 
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

const dropCollections = async () => {
  if (mongo) {
    let collections = mongoose.connection.collections;

    for (const key in collections) {
        // console.log('1. collection is: ',collection);
        const collection = collections[key];
        await collection.deleteMany();
    }

    // collections = await mongoose.connection.db.collections();
    // for (let collection of collections) {
    //   console.log('2. collection is: ',collection);
    //   await collection.remove();
    // }
  }
};

module.exports = { connectDB, dropDB, dropCollections };
