import React from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestStationPickerData } from 'features/station-picker/actions/station-picker-actions';

import StationPicker from 'features/station-picker/station-picker';

const StationPickerContainer = props => (
  <StationPicker
    data={props.stationPicker.data}
    requestStationPickerData={props.requestStationPickerData}
    {...props}
  />
);

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
