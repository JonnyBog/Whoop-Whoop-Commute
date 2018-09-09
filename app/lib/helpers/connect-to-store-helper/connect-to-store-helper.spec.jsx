import React from 'react';
import * as reactRedux from 'react-redux';

import { connectToStoreHelper } from 'lib';

describe('Helpers', () => {
  describe('connect to store', () => {
    it('should export', () => {
      expect(connectToStoreHelper).toBeDefined();
    });

    it('should connect a component', () => {
      jest.spyOn(reactRedux, 'connect');
      connectToStoreHelper({ props: [], actions: [] }, () => <div>Hello World</div>);

      expect(reactRedux.connect).toHaveBeenCalled();
    });
  });
});
