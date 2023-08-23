const { restoreMocks } = require('../restoreMocks');
const { example } = require('../../src/services/example');
const { exampleRepository } = require('../../src/repositories/example');

describe('Example service test', () => {
  let saveSpy;
  let findByEmailSpy;

  beforeEach(() => {
    // Mock console.log to do nothing:
    require('../loggerMock');

    saveSpy = jest.spyOn(exampleRepository, 'save').mockImplementation(() => {});
    findByEmailSpy = jest.spyOn(exampleRepository, 'findByEmail').mockImplementation(() => {});
  });

  afterEach(() => {
    restoreMocks();
  });

  const subject = async () => {
    await example({
      email: 'test@example.com',
      exampleRepository,
      logger: console
    });
  };

  it('should save email', async () => {
    await subject();

    expect(findByEmailSpy).toHaveBeenCalled();
    expect(saveSpy).toHaveBeenCalled();
  });

  it('should return 204 status with message if email is already taken', async () => {
    findByEmailSpy = jest.spyOn(exampleRepository, 'findByEmail')
      .mockImplementation(() => Promise.resolve({ email: 'test@example.com' }));

    await expect(subject()).rejects.toThrow('Email already taken');

    expect(findByEmailSpy).toHaveBeenCalled();
    expect(saveSpy).not.toHaveBeenCalled();
  });

  it('should return 204 status with message if saving email fails', async () => {
    saveSpy = jest.spyOn(exampleRepository, 'save')
      .mockImplementation(() => Promise.reject('Error while saving!'));

    await expect(subject()).rejects.toThrow('Oops! Something failed, please try again later');

    expect(findByEmailSpy).toHaveBeenCalled();
    expect(saveSpy).toHaveBeenCalled();
  });
});
