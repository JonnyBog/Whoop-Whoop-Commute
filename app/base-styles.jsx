import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { reset } from 'styled-reset';
import { Flex, Box } from 'grid-styled';

import DosisRegular from 'assets/fonts/dosis/dosis-regular.ttf';
import DosisBold from 'assets/fonts/dosis/dosis-bold.ttf';
import fredokaOne from 'assets/fonts/fredokaOne/FredokaOne-Regular.ttf';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  orange: '#e8b52c',
  red: '#e02a2a'
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
    font-family: 'Dosis Regular';
    src: url('${DosisRegular}') format('woff');
  }

  @font-face {
    font-family: 'Dosis Bold';
    src: url('${DosisBold}') format('woff');
  }

  @font-face {
    font-family: 'Fredoka One Regular';
    src: url('${fredokaOne}') format('woff');
  }
`;

export const fonts = {
  primary: 'Dosis Regular, Arial, Helvetica, sans-serif',
  primaryBold: 'Dosis Bold, Arial, Helvetica, sans-serif',
  secondary: 'Fredoka One Regular'
};

export const typography = {
  copy: `
    font-family: ${fonts.primary};
    font-size: 14px;
    line-height: 18px;

    ${mediaQueries.tablet} {
      font-size: 16px;
      line-height: 20px;
    }

    ${mediaQueries.desktop} {
      font-size: 18px;
      line-height: 22px;
    }
  `,
  smallCopy: `
    font-family: ${fonts.primary};
    font-size: 10px;
    line-height: 14px;

    ${mediaQueries.tablet} {
      font-size: 12px;
      line-height: 16px;
    }

    ${mediaQueries.desktop} {
      font-size: 14px;
      line-height: 18px;
    }
  `,
  heading: `
    font-family: ${fonts.primaryBold};
    font-size: 14px;
    line-height: 18px;

    ${mediaQueries.tablet} {
      font-size: 18px;
      line-height: 22px;
    }

    ${mediaQueries.desktop} {
      font-size: 22px;
      line-height: 26px;
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

export const gridMarginBottomAll = [
  20,
  30,
  55
];

export const GridContainer = props => (
  <Flex
    px={gridAll}
    flexWrap="wrap"
    {...props}
  />
);

export const GridItem = props => (
  <Box
    px={gridGutterAll}
    flex="0 0 auto"
    {...props}
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
    font-family: ${fonts.primary};
    font-size: 14px;

    ${mediaQueries.tablet} {
      font-size: 16px;
    }

    ${mediaQueries.desktop} {
      font-size: 18px;
    }
  }

  a {
    color: ${colors.black}
  }

  input, ::-webkit-input-placeholder {
    font-family: ${fonts.primary};
  }

  .location-picker {
    height: 350px;

    ${mediaQueries.tablet} {
      height: 400px;
    }

    ${mediaQueries.desktop} {
      height: 500px;
    }
  }
`;
