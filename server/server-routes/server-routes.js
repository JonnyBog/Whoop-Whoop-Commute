import { matchRoutes } from 'react-router-config';
import { matchPath } from 'react-router';

import routes from 'routes';

/**
 * serverRoutes - routes and actions
 * @param {Object} store - redux store
 * @param  {String} url - request url
 * @param {String} path - request path
 * @returns {Promise} - actions to resolve
**/
export default function serverRoutes (store, url, path) {
  return matchRoutes(routes, url).map(({ route }) => {
    const match = matchPath(
      path,
      {
        path: route.path,
        exact: true
      }
    );
    const { fireInitialActions } = route.component;

    return fireInitialActions instanceof Function ? fireInitialActions(store, match.params.slug) : Promise.resolve(null);
  });
}
