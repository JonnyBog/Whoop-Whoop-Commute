import React from 'react';
import { shallow } from 'enzyme';

import PageNotFound from 'components/page-not-found/page-not-found';

describe('Components', () => {
  describe('PageNotFound', () => {
    it('should export', () => {
      expect(PageNotFound).toBeDefined();
    });

    /**
     * createShallowWrapper
     * @returns {JSX} shallow component
     */
    function createShallowWrapper () {
      const history = {};

      return shallow(
        <PageNotFound history={history} />
      );
    }

    describe('Appearance', () => {
      it('should render copy', () => {
        const wrapper = createShallowWrapper();
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
