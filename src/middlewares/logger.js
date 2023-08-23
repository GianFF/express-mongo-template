const logger = (loggerFactory) => (req, _, next) => {
  // Unique number indicating the milliseconds since midnight, January 1, 1970 UTC.
  req.transactionID = new Date().valueOf();
  req.logger = loggerFactory.newLogger(req.transactionID);
  next();
};

module.exports = { logger };
