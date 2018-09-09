import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import RootContainer from 'features/root/root-container';

describe('Features', () => {
  describe('Root Container', () => {
    it('should export a connected component', () => {
      expect(RootContainer).toBeDefined();
    });

    const mockStore = configureMockStore();
    const store = mockStore({});
    let props;

    beforeEach(() => {
      props = {};
    });

    afterEach(() => {
      props = null;
    });

    it('should connect', () => {
      const wrapper = shallow(
        <MemoryRouter>
          <RootContainer {...props} store={store} />
        </MemoryRouter>
      );

      expect(wrapper.instance().props).toEqual(expect.any(Object));
    });

    it('should render correctly', () => {
      const shallowRenderer = rendererShallow.createRenderer();
      const tree = shallowRenderer.render((
        <Provider store={store}>
          <RootContainer {...props} store={store} />
        </Provider>)
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
