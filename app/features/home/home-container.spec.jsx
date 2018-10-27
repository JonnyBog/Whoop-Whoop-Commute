import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHomeContainer from 'features/home/home-container';

describe('Features', () => {
  describe('Home Container', () => {
    it('should export a Connected Component', () => {
      expect(ConnectedHomeContainer).toBeDefined();
    });

    const HomeContainer = ConnectedHomeContainer.WrappedComponent;
    const mockStore = configureMockStore();
    const store = mockStore({});
    let props;

    beforeEach(() => {
      props = {
        home: {
          data: null,
          isFetching: false
        },
        requestHomeData: jest.fn(),
        resetHomeRequest: jest.fn()
      };
    });

    afterEach(() => {
      props = null;
    });

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <HomeContainer {...updatedProps} store={store} />
      );
    }

    it('should connect', () => {
      const wrapper = createShallowWrapper();
      expect(wrapper.instance().props).toEqual({ ...props, store });
    });

    it('should dispatch request data action when fireInitialActions is called', () => {
      const wrapper = new HomeContainer();
      wrapper.constructor.fireInitialActions(store);
      const actions = store.getActions();
      expect(actions[0].type).toEqual('HOME_PAGE_REQUEST');
    });

    it('should not fetch data if there is data already', () => {
      const updatedProps = Object.assign(
        {},
        props,
        {
          home: {
            data: {
              test: 'test'
            }
          }
        }
      );
      const wrapper = createShallowWrapper(updatedProps);
      expect(wrapper.instance().props.requestHomeData).not.toHaveBeenCalled();
    });

    it('should fetch the data if there is no data already', () => {
      const wrapper = createShallowWrapper();
      expect(wrapper.instance().props.requestHomeData).toHaveBeenCalled();
    });

    it('should update the props and store', () => {
      const updatedProps = Object.assign(
        {},
        props,
        {
          home: {
            isFetching: true,
            data: {
              test: 'test'
            }
          }
        }
      );

      const wrapper = createShallowWrapper(updatedProps);
      expect(wrapper.instance().props).toEqual({ ...updatedProps, store });
    });

    it('should return a component from the render prop with the correct props', () => {
      const updatedProps = Object.assign(
        {},
        props,
        {
          home: {
            data: {
              test: 'test'
            }
          }
        }
      );

      const wrapper = createShallowWrapper(updatedProps);
      expect(wrapper.prop('loaded')().props).toEqual({
        data: {
          test: 'test'
        }
      });
    });
  });
});
