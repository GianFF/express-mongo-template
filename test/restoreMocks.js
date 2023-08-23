module.exports = {
  restoreMocks() {
    jest.clearAllMocks()
      .resetAllMocks()
      .restoreAllMocks();
  },
};