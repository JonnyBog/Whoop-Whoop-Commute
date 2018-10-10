import React from 'react';
import styled from 'styled-components';

import {
  colors
} from 'base-styles';

const StyledFormError = styled.p`
  margin-top: 20px;
  color: ${colors.red};
`;

/**
 * Renders FormError component
 * @param {Array} props - react props
 * @returns {JSX} react jsx
 */
export default function FormError ({ children }) {
  return (
    <StyledFormError>
      {children}
    </StyledFormError>
  );
}
