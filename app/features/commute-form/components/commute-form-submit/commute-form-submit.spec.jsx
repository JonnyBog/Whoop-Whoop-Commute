import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import CommuteFormSubmit from 'features/commute-form/components/commute-form-submit/commute-form-submit';

describe('Features', () => {
  describe('Commute Form Submit Component', () => {
    it('should export', () => {
      expect(CommuteFormSubmit).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        isFetching: false,
        error: 'test error',
        children: 'submit'
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
        <CommuteFormSubmit {...updatedProps} />
      ).toJSON();
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <CommuteFormSubmit {...updatedProps} />
      );
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });

      it('should not show message when isFetching is false', () => {
        const wrapper = createShallowWrapper();

        expect(wrapper.find('commute-form-submit__FetchingMessage')).toHaveLength(0);
      });

      it('should show message when isFetching', () => {
        const updatedProps = Object.assign(
          {},
          props,
          {
            isFetching: true
          }
        );
        const wrapper = createShallowWrapper(updatedProps);

        expect(wrapper.find('commute-form-submit__FetchingMessage')).toHaveLength(1);
      });
    });
  });
});
