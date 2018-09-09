import serverDevelopmentOptions from 'server-development-options/server-development-options';

describe('Server', () => {
  describe('Development options', () => {
    let app;

    beforeEach(() => {
      app = {
        use: jest.fn(),
        listen: jest.fn(),
        get: jest.fn()
      };
    });

    it('should export a function', () => {
      const serverDevelopmentOptionsInsance = serverDevelopmentOptions(app);
      expect(serverDevelopmentOptionsInsance).toBeDefined();
    });
  });
});
