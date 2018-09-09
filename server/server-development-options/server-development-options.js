import sourceMapSupport from 'source-map-support';
import expressStaticGzip from 'express-static-gzip';
import morgan from 'morgan';

import { environmentsHelper } from 'lib';

/**
 * serverDevelopmentOptions - development options
 * @param {Object} app - express app
 * @returns {Object} - options
 */
export default function serverDevelopmentOptions (app) {
  let browserRefresh;

  if (environmentsHelper.IS_DEVELOPMENT_ENV) {
    sourceMapSupport.install();
    app.use(expressStaticGzip('static', { indexFromEmptyFile: false }));
    app.get(['/json', '/json/version'], (req, res) => res.sendStatus(204));
    browserRefresh = `<script src="${process.env.BROWSER_REFRESH_URL}"></script>`;
  }

  app.use(morgan('combined'));

  return {
    browserRefresh
  };
}
