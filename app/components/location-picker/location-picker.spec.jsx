import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LocationPicker from 'components/location-picker/location-picker';

describe('Components', () => {
  describe('LocationPicker', () => {
    it('should export', () => {
      expect(LocationPicker).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        value: {
          lat: 20,
          lng: 20
        },
        radius: 20,
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
        <LocationPicker {...updatedProps} />
      ).toJSON();
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <LocationPicker {...updatedProps} />
      );
    }

    describe('Appearance', () => {
      it('should render', () => {
        const tree = createRenderTree();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('Events', () => {
      it('the component state position should update with location picker', () => {
        const wrapper = createShallowWrapper();
        wrapper.instance().latInput = {
          click: jest.fn()
        };
        wrapper.instance().lngInput = {
          click: jest.fn()
        };
        wrapper.instance().handleChange({
          position: {
            lat: 50,
            lng: 50
          }
        });
        expect(wrapper.state().position).toEqual({
          lat: 50,
          lng: 50
        });
      });
    });
  });
});
