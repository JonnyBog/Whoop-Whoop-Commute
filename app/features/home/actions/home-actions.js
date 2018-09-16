export const HOME_PAGE_REQUEST = 'HOME_PAGE_REQUEST';
export const HOME_PAGE_SUCCESS = 'HOME_PAGE_SUCCESS';
export const HOME_PAGE_FAILURE = 'HOME_PAGE_FAILURE';

/**
 * requestHomeData
 * @return {Object} type
 */
export const requestHomeData = () => ({
  type: HOME_PAGE_REQUEST,
  meta: {
    lifecycle: {
      resolve: HOME_PAGE_SUCCESS,
      reject: HOME_PAGE_FAILURE
    }
  }
});

/**
 * receiveHomeData
 * @param {Object} response API response
 * @returns {{type: String, data: Object}} type and data
 */
export const receiveHomeData = response => ({
  type: HOME_PAGE_SUCCESS,
  data: response
});

/**
 * failedHomeRequest
 * @param {Object} error API error
 * @returns {{type: String, error: Object}} type and error
 */
export const failedHomeRequest = error => ({
  type: HOME_PAGE_FAILURE,
  error
});
