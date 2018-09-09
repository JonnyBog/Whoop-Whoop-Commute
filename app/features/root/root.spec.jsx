import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';

import Root from 'features/root/root';

describe('Features', () => {
  describe('Root component', () => {
    it('should export a class', () => {
      expect(Root).toBeDefined();
    });

    let props;

    afterEach(() => {
      props = null;
    });

    /**
     * createShallowRenderTree
     * @returns {JSX} shallow renderer component
     */
    function createShallowRenderTree () {
      const shallowRenderer = rendererShallow.createRenderer();

      return shallowRenderer.render(
        <Root {...props} />
      );
    }

    describe('Appearance', () => {
      it('should render correctly', () => {
        const tree = createShallowRenderTree();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
