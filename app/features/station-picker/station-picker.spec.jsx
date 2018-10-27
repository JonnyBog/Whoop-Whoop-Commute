import React from 'react';
import rendererShallow from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import StationPicker from 'features/station-picker/station-picker';

describe('Features', () => {
  describe('Station Picker component', () => {
    it('should export a function', () => {
      expect(StationPicker).toBeDefined();
    });

    let props;

    beforeEach(() => {
      props = {
        data: {
          matches: [
            {
              label: 'test label',
              value: 'test value'
            }
          ]
        },
        id: 'test id',
        setFieldValue: jest.fn(),
        requestStationPickerData: jest.fn(),
        error: 'test error'
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
        <StationPicker {...updatedProps} />
      );
    }

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <StationPicker {...updatedProps} />
      );
    }

    it('should return content', () => {
      const tree = createShallowRenderTree();
      expect(tree).toMatchSnapshot();
    });

    describe('Events', () => {
      it('should call setFieldValue with correct arguments when handleChange is called', () => {
        const wrapper = createShallowWrapper();
        wrapper.instance().handleChange({
          value: 'test'
        });

        expect(wrapper.instance().props.setFieldValue).toHaveBeenCalledWith(
          props.id,
          'test'
        );
      });

      it('should call requestStationPickerData with correct arguments when handleInputChange is called', () => {
        const wrapper = createShallowWrapper();
        wrapper.instance().handleInputChange({
          value: 'test'
        });

        expect(wrapper.instance().props.requestStationPickerData).toHaveBeenCalledWith(
          {
            value: 'test'
          }
        );
      });
    });
  });
});
