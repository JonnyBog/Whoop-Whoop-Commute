export const STATION_PICKER_REQUEST = 'STATION_PICKER_REQUEST';
export const STATION_PICKER_SUCCESS = 'STATION_PICKER_SUCCESS';
export const STATION_PICKER_FAILURE = 'STATION_PICKER_FAILURE';

/**
 * requestStationPickerData
 * @param {String} targetValue input target value
 * @return {Object} type
 */
export const requestStationPickerData = targetValue => ({
  type: STATION_PICKER_REQUEST,
  targetValue
});

/**
 * receiveStationPickerData
 * @param {Object} response API response
 * @returns {{type: String, data: Object}} type and response
 */
export const receiveStationPickerData = response => ({
  type: STATION_PICKER_SUCCESS,
  response
});

/**
 * failedStationPickerRequest
 * @param {Object} response API response
 * @returns {{type: String, response: Object}} type and response
 */
export const failedStationPickerRequest = response => ({
  type: STATION_PICKER_FAILURE,
  response
});
