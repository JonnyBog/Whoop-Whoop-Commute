import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  GridContainer,
  GridItem,
  typography,
  mediaQueries
} from 'base-styles';

import { CommuteForm } from 'features';

const WeatherContainer = styled.div`
  margin-bottom: 20px;
  max-width: 800px;

  ${mediaQueries.tablet} {
    margin-bottom: 30px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: 40px;
  }
`;

const WeatherTitle = styled.h2`
  ${typography.heading}
  margin-bottom: 10px;
`;

const WeatherForecast = styled.p`
  ${typography.copy}
`;

/**
 * Home
 * @returns {element} JSX
 */
export default function Home ({ data }) {
  return (
    <GridContainer>
      <GridItem
        width={[1, 1/1, 1/1]}
      >
        <WeatherContainer>
          <WeatherTitle>
            Today&#39;s forecast:
          </WeatherTitle>
          <WeatherForecast>
            {data.currentForecast[0].forecastSummary}
          </WeatherForecast>
        </WeatherContainer>
        <CommuteForm />
      </GridItem>
    </GridContainer>
  );
}

Home.propTypes = {
  data: PropTypes.shape()
};

Home.defaultProps = {
  data: {}
};
