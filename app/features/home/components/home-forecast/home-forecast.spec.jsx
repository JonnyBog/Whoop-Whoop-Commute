import React from 'react';
import renderer from 'react-test-renderer';

import LoaderOne from 'components/loader-one/loader-one';

describe('Components', () => {
  describe('LoaderOne', () => {
    it('should export', () => {
      expect(LoaderOne).toBeDefined();
    });

    /**
     * createRenderTree
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <LoaderOne />
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
