import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Station Picker
 * @returns {element} JSX
 */
export default function StationPicker ({ requestStationPickerData, data, value, name, test }) {
  console.log(test);
  return (
    <Fragment>
      <input
        list="station-picker"
        // onKeyUp={e => requestStationPickerData(e.target.value)}
        onKeyUp={test}
        name={name}
        value={value}
      />
      {
        data && data.matches &&
          <datalist id="station-picker">
            {
              data.matches.map(match => (
                <option value={match.name} key={match.name} />
              ))
            }
          </datalist>
      }
    </Fragment>
  );
}

StationPicker.propTypes = {
  requestStationPickerData: PropTypes.func.isRequired,
  data: PropTypes.shape()
};

StationPicker.defaultProps = {
  data: {}
};
