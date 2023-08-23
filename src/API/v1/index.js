const express = require('express');
const { registerExampleRoutes } = require('./example');

const initV1 = (application) => {
  const router = express.Router();
  registerExampleRoutes(router, application);
  return router;
};

module.exports = { initV1 };
