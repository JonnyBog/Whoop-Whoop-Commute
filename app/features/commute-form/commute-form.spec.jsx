import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import CommuteForm from 'features/commute-form/commute-form';

describe('Features', () => {
  describe('Commute Form component', () => {
    it('should export a function', () => {
      expect(CommuteForm).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        requestCommuteFormData: jest.fn(),
        data: [],
        isFetching: false,
        error: '',
        values: [],
        errors: [],
        handleChange: jest.fn(),
        handleSubmit: jest.fn(),
        setFieldValue: jest.fn(),
        submitCount: jest.fn(),
        touched: []
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
        <CommuteForm {...updatedProps} />
      );
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <CommuteForm {...updatedProps} />
      );
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createShallowRenderTree();
        expect(tree).toMatchSnapshot();
      });

      it('should show error when there is an error', () => {
        const updatedProps = Object.assign(
          {},
          props,
          {
            error: 'test error'
          }
        );
        const wrapper = createShallowWrapper(updatedProps);

        expect(wrapper.find('FormError')).toHaveLength(1);
      });
    });
  });
});
