const mongoose = require('mongoose');
const { app } = require('./app');
const config = require('./config');
const { closeDB } = require('./database/connection');

/**
 * onAppCrash takes cares of closing MongoDB connections when the app crashes.
 */
function onAppCrash() {
  console.log('App crashed, closing DB connections and exiting process');
  closeDB();
  process.exit(1);
}

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');

  const port = config.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Server running on ${config.NODE_ENV} mode`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection ERROR: ${err}`);
  onAppCrash();
});

process.on('SIGINT', onAppCrash);
process.on('SIGTERM', onAppCrash);
process.on('SIGQUIT', onAppCrash);
