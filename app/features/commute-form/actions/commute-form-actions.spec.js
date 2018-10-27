import configureMockStore from 'redux-mock-store';

import {
  requestCommuteFormData,
  receiveCommuteFormData,
  failedCommuteFormRequest
} from 'features/commute-form/actions/commute-form-actions';
import fixture from 'features/commute-form/actions/commute-form-actions.fixture';

describe('Features', () => {
  describe('Commute Form Actions', () => {
    const mockStore = configureMockStore();

    describe('COMMUTE_FORM_REQUEST', () => {
      it('should dispatch the COMMUTE_FORM_REQUEST action', () => {
        const store = mockStore({});

        store.dispatch(
          requestCommuteFormData({
            workStation: 'test',
            halfMileRadius: 3,
            lat: '50',
            lng: '50'
          })
        );
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'COMMUTE_FORM_REQUEST',
            workStation: 'test',
            halfMileRadius: 3,
            lat: '50',
            lng: '50'
          }]));
      });
    });

    describe('COMMUTE_FORM_SUCCESS', () => {
      it('should dispatch the COMMUTE_FORM_SUCCESS action', () => {
        const store = mockStore({});

        store.dispatch(
          receiveCommuteFormData(fixture.response)
        );
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'COMMUTE_FORM_SUCCESS',
            response: fixture.response
          }]));
      });
    });

    describe('COMMUTE_FORM_FAILURE', () => {
      it('should dispatch the COMMUTE_FORM_FAILURE action', () => {
        const store = mockStore({});

        store.dispatch(
          failedCommuteFormRequest({
            statusText: 'Something went wrong'
          })
        );
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'COMMUTE_FORM_FAILURE',
            response: {
              statusText: 'Something went wrong'
            }
          }]));
      });
    });
  });
});
