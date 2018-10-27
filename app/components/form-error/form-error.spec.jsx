import React from 'react';
import renderer from 'react-test-renderer';

import FormError from 'components/form-error/form-error';

describe('Components', () => {
  describe('FormError', () => {
    it('should export', () => {
      expect(FormError).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        children: 'test'
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
        <FormError {...updatedProps} />
      ).toJSON();
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
