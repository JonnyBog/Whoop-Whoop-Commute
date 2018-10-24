import React from 'react';
import renderer from 'react-test-renderer';

import CommuteFormResults from 'features/commute-form/components/commute-form-results/commute-form-results';

describe('Features', () => {
  describe('Commute Form Results Component', () => {
    it('should export', () => {
      expect(CommuteFormResults).toBeDefined();
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
     * @returns {JSX} component tree
     */
    function createRenderTree () {
      return renderer.create(
        <CommuteFormResults data={data} />
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
