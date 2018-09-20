import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Station Picker
 * @returns {element} JSX
 */
export default function StationPicker ({ data, requestStationPickerData, id, error, value, onChange }) {
  return (
    <Fragment>
      <input
        id={id}
        list={`${id}-list`}
        value={value}
        onChange={onChange}
        onKeyUp={e => requestStationPickerData(e.target.value)}
      />
      {
        data && data.matches &&
          <datalist id={`${id}-list`}>
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
