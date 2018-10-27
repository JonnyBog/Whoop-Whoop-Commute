import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestStationPickerData } from 'features/station-picker/actions/station-picker-actions';

import StationPicker from 'features/station-picker/station-picker';

// eslint-disable-next-line react/prefer-stateless-function
class StationPickerContainer extends Component {
  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <StationPicker
        data={this.props.stationPicker.data}
        requestStationPickerData={this.props.requestStationPickerData}
        {...this.props}
      />
    );
  }
}
// keeps container tests consistent to be written as class

StationPickerContainer.propTypes = {
  stationPicker: PropTypes.shape({
    data: PropTypes.shape(),
    error: PropTypes.string,
    isFetching: PropTypes.bool
  }).isRequired,
  requestStationPickerData: PropTypes.func.isRequired
};

const config = {
  props: ['stationPicker'],
  actions: [{
    requestStationPickerData
  }]
};

export default connectToStoreHelper(config, StationPickerContainer);
