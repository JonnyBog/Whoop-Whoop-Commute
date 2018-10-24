import React from 'react';
import renderer from 'react-test-renderer';

import FormError from 'components/form-error/form-error';

describe('Components', () => {
  describe('FormError', () => {
    it('should export', () => {
      expect(FormError).toBeDefined();
    });

    /**
     * createRenderTree
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <FormError />
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
