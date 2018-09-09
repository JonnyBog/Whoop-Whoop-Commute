import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { reset } from 'styled-reset';
import { Flex, Box } from 'grid-styled';

import RobotoRegular from 'assets/fonts/roboto/roboto-regular.woff';
import RobotoBold from 'assets/fonts/roboto/roboto-bold.woff';

export const colors = {
  black: '#000000',
  white: '#FFFFFF'
};

export const breakPoints = {
  tablet: 600,
  desktop: 1024,
  largeDesktop: 1600
};

export const breakpointTablet = `${breakPoints.tablet}px`;
export const breakpointDesktop = `${breakPoints.desktop}px`;
export const breakpointLargeDesktop = `${breakPoints.largeDesktop}px`;
export const breakpointAll = [
  breakpointTablet,
  breakpointDesktop,
  breakpointLargeDesktop
];

export const mediaQueries = {
  tablet: `@media (min-width: ${breakpointTablet})`,
  desktop: `@media (min-width: ${breakpointDesktop})`,
  largeDesktop: `@media (min-width: ${breakpointLargeDesktop})`
};

const fontFamilies = `
  @font-face {
    font-family: 'Roboto Regular';
    src: url('${RobotoRegular}') format('woff');
  }

  @font-face {
    font-family: 'Roboto Bold';
    src: url('${RobotoBold}') format('woff');
  }
`;

export const fonts = {
  primary: 'Roboto Regular, Arial, Helvetica, sans-serif',
  primaryBold: 'Roboto Bold, Arial, Helvetica, sans-serif'
};

export const typography = {
  subheadingPrimary: `
    font-family: ${fonts.primary};
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;

    ${mediaQueries.desktop} {
      font-size: 16px;
    }
  `,
  subheadingPrimaryBold: `
    font-family: ${fonts.primaryBold};
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;

    ${mediaQueries.desktop} {
      font-size: 16px;
    }
  `
};

const gutters = {
  mobile: 12,
  tablet: 16,
  desktop: 24
};

export const gutterMobile = `${gutters.mobile}px`;
export const gutterTablet = `${gutters.tablet}px`;
export const gutterDesktop = `${gutters.desktop}px`;

export const gridAll = [
  gutterMobile,
  gutterTablet,
  gutterDesktop
];

export const gridGutterMobile = `${gutters.mobile / 2}px`;
export const gridGutterTablet = `${gutters.tablet / 2}px`;
export const gridGutterDesktop = `${gutters.desktop / 2}px`;

export const gridGutterAll = [
  gridGutterMobile,
  gridGutterTablet,
  gridGutterDesktop
];

export const GridContainer = props => (
  <Flex
    {...props}
    px={gridAll}
    flexWrap="wrap"
  />
);

export const GridItem = props => (
  <Box
    {...props}
    px={gridGutterAll}
    flex="0 0 auto"
  />
);

export const ContentContainer = styled.div`
  padding: 0 ${gutters.mobile * 1.5}px;

  ${mediaQueries.tablet} {
    padding: 0 ${gutters.tablet * 1.5}px;
  }

  ${mediaQueries.desktop} {
    padding: 0 ${gutters.desktop * 1.5}px;
  }
`;

export const appStyles = () => injectGlobal`
  ${reset};
  ${fontFamilies};

  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
    color: ${colors.black};
    font-family: ${fonts.primary};
  }

  .navigation-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const zIndex = {

};

