import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  GridContainer,
  GridItem
} from 'base-styles';

/**
 * PageNotFound
 * @returns {element} JSX
 */
export default function PageNotFound () {
  return (
    <GridContainer>
      <GridItem
        width={[1, 1/1, 1/1]}
      >
        <GridItem
          width={[1, 1/1, 1/2]}
          px={[0, 0, 0]}
        >
          <p>
            Page not found!<br /><br />
            <Link to="/">Take me Home</Link>
          </p>
        </GridItem>
      </GridItem>
    </GridContainer>
  );
}
