import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * PageNotFound
 * @returns {element} JSX
 */
export default function PageNotFound () {
  return (
    <Fragment>
      <Link to="/">Take me Home</Link>
    </Fragment>
  );
}
