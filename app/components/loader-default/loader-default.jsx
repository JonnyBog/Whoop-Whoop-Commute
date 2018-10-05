import React from 'react';
import styled from 'styled-components';

import {
  colors
} from 'base-styles';

const LoaderDefaultContainer = styled.div`
  width: 100%;
  height: 400px;
  background: ${colors.orange};
`;

/**
 * Renders LoaderDefault component
 * @returns {JSX} react jsx
 */
export default function LoaderDefault () {
  return (
    <LoaderDefaultContainer />
  );
}
