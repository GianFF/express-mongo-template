const { v4: uuidv4 } = require('uuid');
const HTTPError = require('../errors/httpError');

const example = async ({
  email, exampleRepository, logger,
}) => {
  logger.log(`Example service - example method - email: ${email}`);

  const existingAccount = await exampleRepository.findByEmail({ email });

  if (existingAccount) {
    throw new HTTPError('Email already taken', 409);
  }

  const verificationCode = uuidv4();

  try {
    await exampleRepository.save({ email, verificationCode });
    logger.log(`New account saved for ${email}`);
  } catch (error) {
    throw new HTTPError('Oops! Something failed, please try again later', 500);
  }
};

module.exports = { example };
