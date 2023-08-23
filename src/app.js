const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('./application');
const { initV1 } = require('./API/v1');
const { errorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./middlewares/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger(application.loggerFactory));

app.get('/healthcheck', (_, res) => res.status(200).send({ message: 'Server healthy' }));
app.use('/v1', initV1(application));

app.use(errorHandler);

module.exports = { app };
