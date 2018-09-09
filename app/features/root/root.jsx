import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from 'routes';
import { appStyles } from 'base-styles';

/**
 * Root
 * @return {element} JSX
 */
export default function Root () {
  appStyles();

  return (
    <Fragment>
      <Switch>
        { renderRoutes(routes) }
      </Switch>
    </Fragment>
  );
}
