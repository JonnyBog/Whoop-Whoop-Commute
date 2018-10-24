import {
  COMMUTE_FORM_REQUEST,
  COMMUTE_FORM_SUCCESS,
  COMMUTE_FORM_FAILURE
} from 'features/commute-form/actions/commute-form-actions';
import commuteFormReducer from 'features/commute-form/reducers/commute-form-reducer';

describe('Features', () => {
  describe('Commute Form Reducer', () => {
    it('should export', () => {
      expect(commuteFormReducer).toBeDefined();
    });

    it('should return the default state', () => {
      const defaultState = {
        isFetching: false,
        data: null,
        error: null
      };
      expect(commuteFormReducer(undefined, { type: undefined })).toEqual(defaultState);
    });

    it('should handle COMMUTE_FORM_REQUEST', () => {
      const result = commuteFormReducer({}, { type: COMMUTE_FORM_REQUEST });
      expect(result).toEqual({ isFetching: true, data: null, error: null });
    });

    it('should handle COMMUTE_FORM_SUCCESS', () => {
      const response = {
        data: {
          title: 'test'
        }
      };
      const result = commuteFormReducer({}, { type: COMMUTE_FORM_SUCCESS, response });
      expect(result).toEqual({ isFetching: false, data: response, error: null });
    });

    it('should handle COMMUTE_FORM_FAILURE', () => {
      const response = {
        statusText: 'error'
      };
      const result = commuteFormReducer({}, { type: COMMUTE_FORM_FAILURE, response });
      expect(result).toEqual({ isFetching: false, data: null, error: response });
    });
  });
});
