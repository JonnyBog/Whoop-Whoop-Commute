import axios from 'axios';

export default {
  /**
   * GET from api endpoint
   * @param {string} endpoint - the endpoint to request
   * @returns {Promise} - axios get
   */
  get (endpoint, config = {}) {
    return axios.get(endpoint);
  }
};
