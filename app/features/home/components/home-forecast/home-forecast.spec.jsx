import React from 'react';
import renderer from 'react-test-renderer';

import HomeForecast from 'features/home/components/home-forecast/home-forecast';

describe('Components', () => {
  describe('Home Forecast', () => {
    it('should export', () => {
      expect(HomeForecast).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        forecastSummary: 'test'
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
        <HomeForecast {...updatedProps} />
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
