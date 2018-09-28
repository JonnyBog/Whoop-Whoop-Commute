import {
  COMMUTE_FORM_REQUEST,
  COMMUTE_FORM_SUCCESS,
  COMMUTE_FORM_NETWORK_ERROR,
  COMMUTE_FORM_FAILURE
} from 'features/commute-form/actions/commute-form-actions';

const defaultState = {
  isFetching: false,
  data: null,
  error: null
};

/**
 * Reducer for updating the Commute Form Feature
 * @param  {Object} state current state
 * @param  {String} action action to carry out
 * @return {Object} new state
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case COMMUTE_FORM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        data: null
      });
    case COMMUTE_FORM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.response
      });
    case COMMUTE_FORM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response
      });
    default:
      return state;
  }
}
