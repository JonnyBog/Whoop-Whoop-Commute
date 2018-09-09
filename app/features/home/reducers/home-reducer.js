import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from 'features/home/actions/home-actions';

const defaultState = {
  isFetching: false,
  data: null
};

/**
 * Reducer for updating the Home Feature
 * @param  {Object} state current state
 * @param  {String} action action to carry out
 * @return {Object} new state
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case HOME_PAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case HOME_PAGE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data.data
      });
    case HOME_PAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.statusText
      });
    default:
      return state;
  }
}
