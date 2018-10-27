import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedCommuteFormContainer from 'features/commute-form/commute-form-container';

describe('Features', () => {
  describe('Commute Form Container', () => {
    it('should export a Connected Component', () => {
      expect(ConnectedCommuteFormContainer).toBeDefined();
    });

    const CommuteFormContainer = ConnectedCommuteFormContainer.WrappedComponent;
    const mockStore = configureMockStore();
    const store = mockStore({});
    let props;

    beforeEach(() => {
      props = {
        commuteForm: {
          data: null,
          isFetching: false
        },
        requestCommuteFormData: jest.fn()
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
        <CommuteFormContainer {...updatedProps} store={store} />
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
          commuteForm: {
            isFetching: true,
            data: [{ test: 'test' }]
          }
        }
      );

      const wrapper = createShallowWrapper(updatedProps);
      expect(wrapper.instance().props).toEqual({ ...updatedProps, store });
    });
  });
});
