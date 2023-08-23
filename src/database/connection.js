const mongoose = require('mongoose');

const closeDB = async () => {
  await mongoose.disconnect();
  await mongoose.connection?.close();
};

const connectDB = (dbURL) => {
  console.log('Connecting to MongoDB...', dbURL);
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
  closeDB,
};
