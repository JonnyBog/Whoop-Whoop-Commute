import configureMockStore from 'redux-mock-store';

import serverRoutes from 'server-routes/server-routes';

jest.mock('routes', () => [
  {
    path: '/test',
    exact: true,
    component: {
      fireInitialActions: () => 'test1'
    }
  },
  {
    path: '/test2',
    exact: true,
    component: {
      fireInitialActions: 'test2'
    }
  }
]);

describe('Server', () => {
  describe('Routes', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});

    it('should export a function', () => {
      const serverRoutesInstance = serverRoutes(store, '/test', '/test');
      expect(serverRoutesInstance).toBeDefined();
    });

    it('should return an array with the matching fireInitialActions response if the routes match', () => {
      const serverRoutesInstance = serverRoutes(store, '/test', '/test');
      expect(serverRoutesInstance).toEqual(['test1']);
    });

    it('should return an array with an empty promise if the matching fireInitialActions isnt a function', () => {
      const serverRoutesInstance = serverRoutes(store, '/test2', '/test2');
      expect(serverRoutesInstance).toEqual([expect.any(Promise)]);
    });
  });
});
