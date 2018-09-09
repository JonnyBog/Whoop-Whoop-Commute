import axios from 'axios';
import { apiHelper } from 'lib';

describe('Helpers', () => {
  describe('apiHelper', () => {
    const endpoint = '/api/test/';

    it('should export an api helper', () => {
      expect(apiHelper).toBeDefined();
    });

    describe('GET request', () => {
      beforeEach(() => {
        axios.get = jest.fn();
      });

      it('should make a GET request to the given URL', () => {
        apiHelper.get(endpoint);
        expect(axios.get).toHaveBeenCalledWith(endpoint);
      });
    });
  });
});
