import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';

import { Root } from 'features';

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
     * @param {Object} updatedProps - defaults to props
     * @returns {JSX} shallow renderer component
     */
    function createShallowRenderTree (updatedProps = props) {
      const shallowRenderer = rendererShallow.createRenderer();

      return shallowRenderer.render(
        <Root {...updatedProps} />
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
