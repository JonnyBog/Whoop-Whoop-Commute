export const COMMUTE_FORM_REQUEST = 'COMMUTE_FORM_REQUEST';
export const COMMUTE_FORM_SUCCESS = 'COMMUTE_FORM_SUCCESS';
export const COMMUTE_FORM_FAILURE = 'COMMUTE_FORM_FAILURE';

/**
 * requestCommuteFormData
 * @param {String} targetValue input target value
 * @return {Object} type
 */
export const requestCommuteFormData = targetValue => ({
  type: COMMUTE_FORM_REQUEST,
  targetValue
});

/**
 * receiveCommuteFormData
 * @param {Object} response API response
 * @returns {{type: String, data: Object}} type and response
 */
export const receiveCommuteFormData = response => ({
  type: COMMUTE_FORM_SUCCESS,
  response
});

/**
 * failedCommuteFormRequest
 * @param {Object} response API response
 * @returns {{type: String, response: Object}} type and response
 */
export const failedCommuteFormRequest = response => ({
  type: COMMUTE_FORM_FAILURE,
  response
});
