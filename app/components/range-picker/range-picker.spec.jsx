import React from 'react';
import renderer from 'react-test-renderer';

import RangePicker from 'components/range-picker/range-picker';

describe('Components', () => {
  describe('RangePicker', () => {
    it('should export', () => {
      expect(RangePicker).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        max: 5,
        label: 'test',
        id: 'test',
        value: 1,
        onChange: jest.fn()
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
        <RangePicker {...updatedProps} />
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
