import {
  STATION_PICKER_REQUEST,
  STATION_PICKER_SUCCESS,
  STATION_PICKER_FAILURE
} from 'features/station-picker/actions/station-picker-actions';
import stationPickerReducer from 'features/station-picker/reducers/station-picker-reducer';

describe('Features', () => {
  describe('Station Picker Reducer', () => {
    it('should export', () => {
      expect(stationPickerReducer).toBeDefined();
    });

    it('should return the default state', () => {
      const defaultState = {
        isFetching: false,
        data: {
          matches: []
        },
        error: ''
      };
      expect(stationPickerReducer(undefined, { type: undefined })).toEqual(defaultState);
    });

    it('should handle STATION_PICKER_REQUEST', () => {
      const result = stationPickerReducer({}, { type: STATION_PICKER_REQUEST });
      expect(result).toEqual({ isFetching: true, data: { matches: [] }, error: '' });
    });

    it('should handle STATION_PICKER_SUCCESS', () => {
      const response = {
        data: {
          title: 'test'
        }
      };
      const result = stationPickerReducer({}, { type: STATION_PICKER_SUCCESS, response });
      expect(result).toEqual({ isFetching: false, data: response.data });
    });

    it('should handle STATION_PICKER_FAILURE', () => {
      const response = {
        message: 'error'
      };
      const result = stationPickerReducer({}, { type: STATION_PICKER_FAILURE, response });
      expect(result).toEqual({ isFetching: false, error: response.message });
    });
  });
});
