import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const MilesPickerLabel = styled.p`
  margin-bottom: 5px;
`;

/**
 * Renders MilesPicker component
 * @returns {JSX} react jsx
 */
export default function MilesPicker ({ maxMiles, label, id, error, value, onChange }) {
  return (
    <Fragment>
      <MilesPickerLabel>
        {label}
      </MilesPickerLabel>
      <input
        id={id}
        type="range"
        min="1"
        max={maxMiles}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
}

MilesPicker.propTypes = {
  maxMiles: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired
};
