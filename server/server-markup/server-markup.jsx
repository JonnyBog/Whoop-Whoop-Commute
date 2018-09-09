import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-safety-helmet';
import { ThemeProvider } from 'styled-components';

import { breakpointAll } from 'base-styles';

import Root from 'features/root/root';

/**
 * ServerMarkup
 * @param {String} props - react props
 * @returns {JSX} - server markup
 */
export default function ServerMarkup (props) {
  const context = {};

  return (
    <HelmetProvider store={props.helmetStore}>
      <ThemeProvider
        theme={{
          breakpoints: breakpointAll
        }}
      >
        <Provider store={props.store}>
          <StaticRouter location={props.url} context={context}>
            <Root />
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

ServerMarkup.propTypes = {
  helmetStore: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
  url: PropTypes.string.isRequired
};
