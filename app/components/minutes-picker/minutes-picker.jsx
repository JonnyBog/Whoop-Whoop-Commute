import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

/**
 * Renders MilesPicker component
 * @returns {JSX} react jsx
 */
export default function MilesPicker ({ options, label }) {
  const metersInMile = 1609.34;

  return (
    <Fragment>
      <div>{label}</div>
      <select>
        {
          options.map(option => (
            <option value={option * metersInMile} key={option}>{option}</option>
          ))
        }
      </select>
    </Fragment>
  );
}

MilesPicker.propTypes = {
  options: Proptypes.arrayOf(Proptypes.number).isRequired,
  label: Proptypes.string.isRequired
};
