const { asyncHandler } = require('../../middlewares/asyncHandler');

const registerExampleRoutes = (router, application) => {
  router.post('/example', asyncHandler(async (req, res) => {
    req.logger.log('POST /v1/example');

    const { email } = req.body;
    await application.exampleService.example({
      email, ...application, logger: req.logger,
    });
    return res
      .status(200)
      .send({
        message: 'Example succeed',
      });
  }));
};

module.exports = { registerExampleRoutes };
