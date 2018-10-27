import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedStationPickerContainer from 'features/station-picker/station-picker-container';

describe('Features', () => {
  describe('Station Picker Container', () => {
    it('should export a Connected Component', () => {
      expect(ConnectedStationPickerContainer).toBeDefined();
    });

    const StationPickerContainer = ConnectedStationPickerContainer.WrappedComponent;
    const mockStore = configureMockStore();
    const store = mockStore({});
    let props;

    beforeEach(() => {
      props = {
        stationPicker: {
          data: null,
          isFetching: false
        },
        requestStationPickerData: jest.fn(),
        setFieldValue: jest.fn(),
        id: 'test',
        error: ''
      };
    });

    afterEach(() => {
      props = null;
    });

    /**
     * createShallowWrapper
     * @param   {Object} updatedProps - defaults to props
     * @returns {JSX} shallow component
     */
    function createShallowWrapper (updatedProps = props) {
      return shallow(
        <StationPickerContainer {...updatedProps} store={store} />
      );
    }

    it('should connect', () => {
      const wrapper = createShallowWrapper();
      expect(wrapper.instance().props).toEqual({ ...props, store });
    });

    it('should update the props and store', () => {
      const updatedProps = Object.assign(
        {},
        props,
        {
          stationPicker: {
            isFetching: true,
            data: {
              test: 'test'
            }
          }
        }
      );

      const wrapper = createShallowWrapper(updatedProps);
      expect(wrapper.instance().props).toEqual({ ...updatedProps, store });
    });
  });
});
