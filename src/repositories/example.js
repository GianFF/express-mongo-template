const Example = require('../models/example');

const exampleRepository = {
  async save({
    email, verificationCode, status = undefined,
  }) {
    const newExample = new Example({
      email, verificationCode, status,
    });
    return newExample.save();
  },
  async findByEmail({ email }) {
    return Example.findOne({ email });
  },
};

module.exports = { exampleRepository };
