import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestHomeData } from 'features/home/actions/home-actions';

import ConditionalRender from 'components/conditional-render/conditional-render';
import Home from 'features/home/home';

class HomeContainer extends Component {
  /**
   * propTypes
   * @type {Object}
   */
  static propTypes = {
    home: PropTypes.shape({
      data: PropTypes.shape(),
      error: PropTypes.shape(),
      isFetching: PropTypes.bool
    }).isRequired,
    requestHomeData: PropTypes.func.isRequired
  };

  /**
   *  fireInitialActions - fire initial actions on server
   * @param {Object} store - redux store
   * @returns {Function} dispatch
   */
  static fireInitialActions (store) {
    return store.dispatch(requestHomeData());
  }

  /**
   * componentDidMount
   * @returns {Object} props
   */
  componentDidMount () {
    if (!this.props.home.data) {
      this.props.requestHomeData();
    }
  }

  /**
   * render
   * @returns {element} JSX
   */
  render () {
    return (
      <ConditionalRender
        storeItem={this.props.home}
        loader="loaderDefault"
        loaded={() => (
          <Home
            data={this.props.home.data}
          />
        )}
      />
    );
  }
}

const config = {
  props: ['home'],
  actions: [{
    requestHomeData
  }]
};

export default connectToStoreHelper(config, HomeContainer);
