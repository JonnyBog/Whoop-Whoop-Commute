import React from 'react';
import PropTypes from 'prop-types';
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
 * @param {Object} props - react props
 * @returns {JSX} react jsx
 */
export default function FormError ({ children }) {
  return (
    <StyledFormError>
      {children}
    </StyledFormError>
  );
}

FormError.propTypes = {
  children: PropTypes.string.isRequired
};
