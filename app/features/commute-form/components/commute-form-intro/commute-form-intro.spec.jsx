import React from 'react';
import renderer from 'react-test-renderer';

import CommuteFormIntro from 'features/commute-form/components/commute-form-intro/commute-form-intro';

describe('Features', () => {
  describe('Commute Form Intro Component', () => {
    it('should export', () => {
      expect(CommuteFormIntro).toBeDefined();
    });

    /**
     * createRenderTree
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <CommuteFormIntro />
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
