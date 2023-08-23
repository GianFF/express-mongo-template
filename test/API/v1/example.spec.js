const request = require('supertest');
const { connectDB, dropDB, dropCollections } = require('../../connection');
const { app } = require('../../../src/app');
const { application } = require('../../../src/application');

// Mock console.log to do nothing:
require('../../loggerMock');

describe('Example test API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await dropDB();
  });

  beforeEach(async () => {
    await dropCollections();
  });

  it('should save email', async () => {
    const email = 'test@example.com';

    const response = await request(app)
      .post('/v1/example')
      .send({ email })
      .expect(200);

    expect(response.body.message).toBe('Example succeed');

    const example = await application.exampleRepository.findByEmail({ email });
    expect(example).toBeTruthy();
    expect(example.email).toBe(email);
    expect(example.verificationCode).toBeTruthy();
    expect(example.status).toBe('Unverified');
  });

  it('should return 409 status with message if email is already taken', async () => {
    const email = 'test@example.com';
    const verificationCode = '123';

    await application.exampleRepository.save({ email, verificationCode });

    await request(app)
      .post('/v1/example')
      .send({ email })
      .expect(409, { message: 'Email already taken' });
  });

  it('should return 500 status with message if any action fails', async () => {
    const email = 'test@example.com';

    // Mock createAccount to throw an error
    application.exampleRepository.save = jest.fn(() => {
      return Promise.reject('Test error');
    });

    await request(app)
      .post('/v1/example')
      .send({ email })
      .expect(500, { message: 'Oops! Something failed, please try again later' });
  });
});
