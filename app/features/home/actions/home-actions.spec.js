import configureMockStore from 'redux-mock-store';

import {
  requestHomeData,
  receiveHomeData,
  failedHomeRequest
} from 'features/home/actions/home-actions';
import fixture from 'features/home/actions/home-actions.fixture';

describe('Features', () => {
  describe('Home Actions', () => {
    const mockStore = configureMockStore();

    describe('HOME_PAGE_REQUEST', () => {
      it('should dispatch the HOME_PAGE_REQUEST action', () => {
        const store = mockStore({});

        store.dispatch(requestHomeData());
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'HOME_PAGE_REQUEST',
            meta:
              {
                lifecycle: {
                  reject: 'HOME_PAGE_FAILURE',
                  resolve: 'HOME_PAGE_SUCCESS'
                }
              }
          }]));
      });
    });

    describe('HOME_PAGE_SUCCESS', () => {
      it('should dispatch the HOME_PAGE_SUCCESS action', () => {
        const store = mockStore({});

        store.dispatch(receiveHomeData(fixture.response));
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'HOME_PAGE_SUCCESS',
            data: fixture.response
          }]));
      });
    });

    describe('HOME_PAGE_FAILURE', () => {
      it('should dispatch the HOME_PAGE_FAILURE action', () => {
        const store = mockStore({});

        store.dispatch(failedHomeRequest({
          response: 'Something went wrong'
        }));
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'HOME_PAGE_FAILURE',
            error: 'Something went wrong'
          }]));
      });
    });
  });
});
