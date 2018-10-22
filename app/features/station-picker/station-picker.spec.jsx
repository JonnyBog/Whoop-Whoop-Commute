import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';

import Home from 'features/home/home';

describe('Features', () => {
  describe('Home component', () => {
    it('should export a function', () => {
      expect(Home).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        data: [
          {
            title: 'test'
          }
        ]
      };
    });

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
        <Home {...updatedProps} />
      );
    }

    it('should return content', () => {
      const tree = createShallowRenderTree();
      expect(tree).toMatchSnapshot();
    });
  });
});
