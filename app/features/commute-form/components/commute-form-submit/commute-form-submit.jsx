import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  colors,
  typography,
  mediaQueries
} from 'base-styles';

const Submit = styled.button`
  background: ${colors.orange};
  border-radius: 20px;
  padding: 10px 20px;
  color: ${props => props.error ? colors.red : colors.white};
  ${typography.heading}
  margin-top: 20px;
  outline: 0;
  border: 0;

  &:focus, &:active {
    outline: 0;
    border: 0;
  }

  ${mediaQueries.tablet} {
    margin-top: 30px;
  }

  ${mediaQueries.desktop} {
    margin-top: 50px;
  }
`;

const FetchingMessage = styled.p`
  ${typography.copy}
  margin-top: 10px;
  width: 100%;

  ${mediaQueries.tablet} {
    margin-top: 20px;
  }

  ${mediaQueries.desktop} {
    margin-top: 30px;
  }
`;

/**
 * Renders CommuteFormResults component
 * @param {Object} props - react props
 * @returns {JSX} react jsx
 */
export default function CommuteFormSubmit ({ isFetching, error, children }) {
  return (
    <Fragment>
      <Submit disabled={isFetching} type="submit" error={error}>
        {children}
      </Submit>
      {
        isFetching &&
          <FetchingMessage>
            The TFL development API can be slow. Please forgive the long loading for areas with many stations.
          </FetchingMessage>
      }
    </Fragment>
  );
}

CommuteFormSubmit.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
