import { observableToPromiseMiddleware } from 'lib';

describe('Middleware', () => {
  describe('Observable to promise', () => {
    const store = undefined;
    const next = jest.fn();

    describe('Has lifecycle meta', () => {
      const action = {
        type: 'HOME_PAGE_REQUEST',
        meta: {
          lifecycle: {
            resolve: 'HOME_PAGE_SUCCESS',
            reject: 'HOME_PAGE_FAILURE'
          }
        }
      };

      it('should invoke next with action', () => {
        observableToPromiseMiddleware(store)(next)(action);
        expect(next).toHaveBeenCalledWith(action);
      });

      it('should return a promise', () => {
        const observableToPromiseMiddlewareInstance = observableToPromiseMiddleware(store)(next)(action);
        expect(observableToPromiseMiddlewareInstance.constructor.name).toBe('Promise');
      });
    });

    describe('Has pending from previous call', () => {
      const action = {
        type: 'HOME_PAGE_SUCCESS',
        data: 'test'
      };

      it('should return the next method', () => {
        expect(observableToPromiseMiddleware(store)(next)(action)).toBe(next());
      });
    });
  });
});
