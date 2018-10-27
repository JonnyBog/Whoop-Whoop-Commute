import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestStationPickerData } from 'features/station-picker/actions/station-picker-actions';

import StationPicker from 'features/station-picker/station-picker';

// eslint-disable-next-line react/prefer-stateless-function
class StationPickerContainer extends Component {
  /**
   * propTypes
   * @type {Object}
   */
  static propTypes = {
    stationPicker: PropTypes.shape({
      data: PropTypes.shape()
    }).isRequired,
    requestStationPickerData: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func,
    id: PropTypes.string.isRequired,
    error: PropTypes.string
  };

  /**
   * defaultProps
   * @type {Object}
   */
  static defaultProps = {
    setFieldValue: () => {},
    error: ''
  };

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <StationPicker
        data={this.props.stationPicker.data}
        error={this.props.error}
        requestStationPickerData={this.props.requestStationPickerData}
        id={this.props.id}
        setFieldValue={this.props.setFieldValue}
      />
    );
  }
}
// keeps container tests consistent to be written as class

const config = {
  props: ['stationPicker'],
  actions: [{
    requestStationPickerData
  }]
};

export default connectToStoreHelper(config, StationPickerContainer);
