import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const RangePickerLabel = styled.p`
  margin-bottom: 5px;
`;

/**
 * Renders RangePicker component
 * @param {Object} props - react props
 * @returns {JSX} react jsx
 */
export default function RangePicker ({ max, label, id, value, onChange }) {
  return (
    <Fragment>
      <RangePickerLabel>
        {label}
      </RangePickerLabel>
      <input
        id={id}
        type="range"
        min="1"
        max={max}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
}

RangePicker.propTypes = {
  max: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired
};
