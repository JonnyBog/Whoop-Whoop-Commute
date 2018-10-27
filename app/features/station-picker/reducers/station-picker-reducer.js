import {
  STATION_PICKER_REQUEST,
  STATION_PICKER_SUCCESS,
  STATION_PICKER_FAILURE
} from 'features/station-picker/actions/station-picker-actions';

const defaultState = {
  isFetching: false,
  data: {
    matches: []
  },
  error: null
};

/**
 * Reducer for updating the Station Picker Feature
 * @param  {Object} state current state
 * @param  {String} action action to carry out
 * @return {Object} new state
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case STATION_PICKER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        data: {
          matches: []
        },
        error: null
      });
    case STATION_PICKER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.response.data
      });
    case STATION_PICKER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response.message
      });
    default:
      return state;
  }
}
