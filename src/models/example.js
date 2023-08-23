const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  status: { type: String, default: 'Unverified' },
  verificationCode: { type: String },
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
