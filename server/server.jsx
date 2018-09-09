import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { createHelmetStore } from 'react-safety-helmet';
import ejs from 'ejs';
import { getLoadableState } from 'loadable-components/server';
import { ServerStyleSheet } from 'styled-components';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import configureStore from 'store';

import serverDevelopmentOptions from 'server-development-options/server-development-options';
import serverRoutes from 'server-routes/server-routes';
import ServerMarkup from 'server-markup/server-markup';
import serverHead from 'server-head.ejs';
import serverFooter from 'server-footer.ejs';

const app = express();
const developmentOptions = serverDevelopmentOptions(app);
const store = configureStore();

app.use((req, res) =>
  Promise.all(
    serverRoutes(store, req.url, req.path)
  )
    .finally(() => {
      const initialData = serialize(store.getState());
      const styleSheet = new ServerStyleSheet();
      const helmetStore = createHelmetStore();

      const reactMarkup = (
        styleSheet.collectStyles(
          <ServerMarkup
            store={store}
            url={req.url}
            helmetStore={helmetStore}
          />
        )
      );

      const htmlMarkup =
        styleSheet.interleaveWithNodeStream(
          renderToNodeStream(reactMarkup)
        );

      getLoadableState(reactMarkup).then(loadableState => {
        const helmet = helmetStore.renderStatic();
        const ejsOptions = {
          rmWhitespace: true
        };

        res.write(
          ejs.render(
            serverHead,
            {
              initialData,
              htmlAttributes: helmet.htmlAttributes.toString(),
              title: helmet.title.toString(),
              meta: helmet.meta.toString(),
              bodyAttributes: helmet.bodyAttributes.toString(),
              sprite
            },
            ejsOptions
          )
        );
        htmlMarkup.pipe(res, { end: false });
        htmlMarkup.on('end', () => {
          res.write(
            ejs.render(
              serverFooter,
              {
                loadableScriptTag: loadableState.getScriptTag(),
                browserRefresh: developmentOptions.browserRefresh
              },
              ejsOptions
            )
          );
          res.end();
        });
      }).catch(error => error);
    })
);

app.listen(process.env.PORT, () => {
  if (process.send) {
    process.send({ event: 'online', url: `http://localhost:${process.env.PORT}/` });
  }
});
