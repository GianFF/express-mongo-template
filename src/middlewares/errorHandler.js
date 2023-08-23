const HTTPError = require('../errors/httpError');

const errorHandler = (error, req, res, next) => {
  if (error instanceof HTTPError) {
    req.logger.log(`Status code: ${error.statusCode} - ${error.stack}`);
    res.status(error.statusCode);
    res.json({
      message: error.message,
    });
  } else {
    // TODO: handle other kind of errors
    next();
  }
};

module.exports = { errorHandler };
