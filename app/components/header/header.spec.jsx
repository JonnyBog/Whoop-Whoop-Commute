import React from 'react';
import renderer from 'react-test-renderer';

import Header from 'components/header/header';

describe('Components', () => {
  describe('Header', () => {
    it('should export', () => {
      expect(Header).toBeDefined();
    });

    /**
     * createRenderTree
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <Header />
      ).toJSON();
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
