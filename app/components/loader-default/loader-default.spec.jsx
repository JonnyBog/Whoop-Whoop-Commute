import React from 'react';
import renderer from 'react-test-renderer';

import LoaderDefault from 'components/loader-default/loader-default';

describe('Components', () => {
  describe('LoaderDefault', () => {
    it('should export', () => {
      expect(LoaderDefault).toBeDefined();
    });

    /**
     * createRenderTree
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <LoaderDefault />
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
