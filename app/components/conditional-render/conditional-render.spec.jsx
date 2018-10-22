import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import ConditionalRender from 'components/conditional-render/conditional-render';

describe('Components', () => {
  describe('ConditionalRender', () => {
    it('should export', () => {
      expect(ConditionalRender).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        storeItem: {
          data: null,
          error: null,
          isFetching: true
        },
        loaded: jest.fn(),
        loader: undefined,
        history: {
          replace: jest.fn()
        }
      };
    });

    afterEach(() => {
      props = null;
    });

    /**
     * createRenderTree
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} component tree
     */
    function createRenderTree (updatedProps = props) {
      return renderer.create(
        <ConditionalRender.WrappedComponent {...updatedProps} />
      ).toJSON();
    }

    /**
     * createMountWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} mount component
     */
    function createMountWrapper (updatedProps = props) {
      return mount(
        <ConditionalRender.WrappedComponent {...updatedProps} />
      );
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <ConditionalRender.WrappedComponent {...updatedProps} />
      );
    }

    describe('Appearance', () => {
      it('should render a standard conditionalRender', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });

      it('should render default loader when isFetching is true and loader is not received', () => {
        const wrapper = createShallowWrapper();
        expect(wrapper.find('LoaderDefault').length).toBe(1);
      });

      it('should call the loaded prop when isFetching is false and there is data', () => {
        const updatedProps = Object.assign(
          {},
          props,
          {
            storeItem: {
              data: {
                test: 'test'
              },
              isFetching: false
            }
          }
        );
        const wrapper = createMountWrapper(updatedProps);
        expect(wrapper.props().loaded).toHaveBeenCalled();
      });

      it('should push to 404 page when there is an error', () => {
        const updatedProps = Object.assign(
          {},
          props,
          {
            storeItem: {
              error: 'test'
            }
          }
        );
        const wrapper = createMountWrapper(updatedProps);
        expect(wrapper.props().history.replace).toHaveBeenCalled();
      });
    });
  });
});
