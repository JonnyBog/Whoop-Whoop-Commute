import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadComponents } from 'loadable-components';
import { ThemeProvider } from 'styled-components';
import { breakpointAll } from 'base-styles';
import { HelmetProvider, createHelmetStore } from 'react-safety-helmet';

import configureStore from 'store';
import RootContainer from 'features/root/root-container';

const store = configureStore(window.__initialData__); // eslint-disable-line no-underscore-dangle
const helmetStore = createHelmetStore();

loadComponents().then(() => {
  hydrate(
    <HelmetProvider store={helmetStore}>
      <ThemeProvider
        theme={{
          breakpoints: breakpointAll
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <RootContainer />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </HelmetProvider>,
    document.getElementById('root')
  );
});
