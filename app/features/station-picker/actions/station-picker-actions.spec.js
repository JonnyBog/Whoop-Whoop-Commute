import configureMockStore from 'redux-mock-store';

import {
  requestStationPickerData,
  receiveStationPickerData,
  failedStationPickerRequest
} from 'features/station-picker/actions/station-picker-actions';
import fixture from 'features/station-picker/actions/station-picker-actions.fixture';

describe('Features', () => {
  describe('Station Picker Actions', () => {
    const mockStore = configureMockStore();

    describe('STATION_PICKER_REQUEST', () => {
      it('should dispatch the STATION_PICKER_REQUEST action', () => {
        const store = mockStore({});

        store.dispatch(requestStationPickerData());
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'STATION_PICKER_REQUEST'
          }]));
      });
    });

    describe('STATION_PICKER_SUCCESS', () => {
      it('should dispatch the STATION_PICKER_SUCCESS action', () => {
        const store = mockStore({});

        store.dispatch(receiveStationPickerData(fixture.response));
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'STATION_PICKER_SUCCESS',
            response: fixture.response
          }]));
      });
    });

    describe('STATION_PICKER_FAILURE', () => {
      it('should dispatch the STATION_PICKER_FAILURE action', () => {
        const store = mockStore({});

        store.dispatch(failedStationPickerRequest({
          statusText: 'Something went wrong'
        }));
        expect(store.getActions())
          .toEqual(expect.arrayContaining([{
            type: 'STATION_PICKER_FAILURE',
            response: {
              statusText: 'Something went wrong'
            }
          }]));
      });
    });
  });
});
