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
        data:{
          currentForecast: [
            {
              forecastSummary: 'test'
            }
          ]
        }
      };
    });

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
        <Home {...props} />
      );
    }

    it('should return content', () => {
      const tree = createShallowRenderTree();
      expect(tree).toMatchSnapshot();
    });
  });
});
