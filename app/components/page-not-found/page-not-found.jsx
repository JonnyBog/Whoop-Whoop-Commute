import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Paragraph from 'components/paragraph/paragraph';

/**
 * PageNotFound
 * @returns {element} JSX
 */
export default function PageNotFound () {
  return (
    <Fragment>
      <Paragraph
        copy="Page not found"
      />
      <Link to="/">Take me Home</Link>
    </Fragment>
  );
}
