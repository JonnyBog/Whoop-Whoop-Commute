import React from 'react';
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

/**
 * Renders CommuteFormResults component
 * @param {Array} props - react props
 * @returns {JSX} react jsx
 */
export default function CommuteFormSubmit ({ isFetching, error, children }) {
  return (
    <Submit disabled={isFetching} type="submit" error={error}>
      {children}
    </Submit>
  );
}
