import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

/**
 * Renders MilesPicker component
 * @returns {JSX} react jsx
 */
export default function MilesPicker ({ maxMiles, label, id, error, value, onChange }) {
  return (
    <Fragment>
      <div>{label}</div>
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
