import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import CommuteFormResults from 'features/commute-form/components/commute-form-results/commute-form-results';

describe('Features', () => {
  describe('Commute Form Results Component', () => {
    it('should export', () => {
      expect(CommuteFormResults).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        data: [
          {
            duration: 10,
            legs: [
              {
                departurePoint: {
                  commonName: 'test name'
                },
                instruction: {
                  summary: 'test summary'
                }
              }
            ]
          },
          {
            duration: 1,
            legs: [
              {
                departurePoint: {
                  commonName: 'test name'
                },
                instruction: {
                  summary: 'test summary'
                }
              }
            ]
          }
        ]
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
        <CommuteFormResults {...updatedProps} />
      ).toJSON();
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <CommuteFormResults {...updatedProps} />
      );
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });

      it('should remove any duplicate results with the same Common Name', () => {
        const wrapper = createShallowWrapper();

        expect(wrapper.find('commute-form-results__ResultWrapper')).toHaveLength(1);
      });

      it('should render as many JourneyCopy elements as there are legs', () => {
        const wrapper = createShallowWrapper();

        expect(wrapper.find('commute-form-results__ResultWrapper').at(0).find('commute-form-results__ResultsCopy')).toHaveLength(1);
      });
    });
  });
});
