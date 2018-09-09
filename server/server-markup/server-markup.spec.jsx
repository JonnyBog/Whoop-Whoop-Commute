import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store';

import ServerMarkup from 'server-markup/server-markup';

describe('Server', () => {
  describe('Markup', () => {
    it('should export a function', () => {
      expect(ServerMarkup).toBeDefined();
    });

    let props;
    const mockStore = configureMockStore();
    const store = mockStore({});

    beforeEach(() => {
      props = {
        helmetStore: {},
        store,
        url: 'test.com'
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
        <ServerMarkup {...props} />
      );
    }

    it('should return content', () => {
      const tree = createShallowRenderTree();
      expect(tree).toMatchSnapshot();
    });
  });
});
