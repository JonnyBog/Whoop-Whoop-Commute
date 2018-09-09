import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from 'features/home/actions/home-actions';
import homeReducer from 'features/home/reducers/home-reducer';

describe('Features', () => {
  describe('Home Reducer', () => {
    it('should export', () => {
      expect(homeReducer).toBeDefined();
    });

    it('should return the default state', () => {
      const defaultState = {
        isFetching: false,
        data: null
      };
      expect(homeReducer(undefined, { type: undefined })).toEqual(defaultState);
    });

    it('should handle HOME_PAGE_REQUEST', () => {
      const result = homeReducer({}, { type: HOME_PAGE_REQUEST });
      expect(result).toEqual({ isFetching: true });
    });

    it('should handle HOME_PAGE_SUCCESS', () => {
      const data = {
        title: 'test'
      };
      const result = homeReducer({}, { type: HOME_PAGE_SUCCESS, data });
      expect(result).toEqual({ isFetching: false, data });
    });

    it('should handle HOME_PAGE_FAILURE', () => {
      const error = {
        error: 'test'
      };
      const result = homeReducer({}, { type: HOME_PAGE_FAILURE, error });
      expect(result).toEqual({ isFetching: false, error });
    });
  });
});
