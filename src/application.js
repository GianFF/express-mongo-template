const config = require('./config');
const { connectDB } = require('./database/connection');
const { exampleRepository } = require('./repositories/example');
const exampleService = require('./services/example');
const loggerFactory = require('./logger');

const testApp = () => ({
  loggerFactory,
  exampleRepository,
  exampleService,
});

const prodApp = () => {
  connectDB(config.DB_URL);

  return {
    loggerFactory,
    exampleRepository,
    exampleService,
  };
};

const createApp = () => (
  config.NODE_ENV === 'test' ? testApp() : prodApp()
);

module.exports = { application: createApp() };
