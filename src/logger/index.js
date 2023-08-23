module.exports = {
  newLogger: (transactionID) => ({
    transactionID: transactionID || '',
    timestamp: new Date().toLocaleTimeString(),
    log(message) {
      console.log(`${this.timestamp} - ${this.transactionID} - ${message}`);
    },
  }),
};
