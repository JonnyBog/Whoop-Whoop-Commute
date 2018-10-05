import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LoaderDefault from 'components/loader-default/loader-default';

/**
 * ConditionalRender - handles render states
 * @param {Object} props - react props
 * @returns {element} - JSX
 */
function ConditionalRender (
  { loader, storeItem, history, loaded }
) {
  /**
   * handleLoader - render the correct loader
   * @returns {Void} - void
   */
  function handleLoader () {
    switch (loader) {
      default:
        return <LoaderDefault />;
    }
  }

  return (
    <Fragment>
      {storeItem.isFetching && handleLoader()}
      {!storeItem.isFetching && storeItem.data && loaded()}
      {storeItem.error && history.replace('/page-not-found')}
    </Fragment>
  );
}

ConditionalRender.propTypes = {
  storeItem: PropTypes.shape({
    data: PropTypes.object,
    error: PropTypes.string,
    isFetching: PropTypes.bool
  }).isRequired,
  loaded: PropTypes.func.isRequired,
  loader: PropTypes.string,
  history: PropTypes.shape({
    replace: PropTypes.func
  }).isRequired
};

ConditionalRender.defaultProps = {
  loader: null
};

export default withRouter(ConditionalRender);
