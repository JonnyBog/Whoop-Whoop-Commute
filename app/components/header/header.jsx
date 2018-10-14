import React from 'react';
import styled from 'styled-components';

import {
  GridContainer,
  GridItem,
  fonts,
  mediaQueries,
  colors,
  typography
} from 'base-styles';

const Title = styled.h1`
  font-family: ${fonts.secondary};
`;

const TitleWhoop = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  padding-bottom: 5px;

  ${mediaQueries.tablet} {
    font-size: 22px;
  }

  ${mediaQueries.desktop} {
    font-size: 30px;
  }
`;

const TitleWhoopOs = styled.span`
  position: relative;
  font-size: 12px;
  top: 1px;

  ${mediaQueries.tablet} {
    font-size: 16px;
    top: 2px;
  }

  ${mediaQueries.desktop} {
    font-size: 20px;
    top: 3px;
  }
`;

const TitleCommute = styled.div`
  font-size: 30px;
  color: ${colors.orange};

  ${mediaQueries.tablet} {
    font-size: 40px;
  }

  ${mediaQueries.desktop} {
    font-size: 50px;
  }
`;

const Message = styled.p`
  ${typography.smallCopy}
  width: 100%;
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
        py={[20, 30, 40]}
      >
        <Title>
          <TitleWhoop>
            Wh
            <TitleWhoopOs>oo</TitleWhoopOs>
            p Wh
            <TitleWhoopOs>oo</TitleWhoopOs>
            p
          </TitleWhoop>
          <TitleCommute>
            Commute
          </TitleCommute>
        </Title>
        <Message>
          This is a development app. Git repo <a href="https://bitbucket.org/JonnyBoggon/whoop-whoop-commute">here</a>
        </Message>
      </GridItem>
    </GridContainer>
  );
}
