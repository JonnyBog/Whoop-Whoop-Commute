import React from 'react';
import styled from 'styled-components';

import {
  GridContainer,
  GridItem,
  gridGutterAll,
  fonts
} from 'base-styles';

const Title = styled.h1`
  font-size: 40px;
  font-family: ${fonts.secondary};
`;

/**
 * Renders Header component
 * @returns {JSX} react jsx
 */
export default function Header () {
  return (
    <GridContainer>
      <GridItem
        width={[1, 1/1, 1/1]}
        py={gridGutterAll}
      >
        <Title>Test Test ToTest</Title>
      </GridItem>
    </GridContainer>
  );
}
