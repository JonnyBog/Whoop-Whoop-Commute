import React from 'react';
import styled from 'styled-components';

import {
  typography,
  mediaQueries
} from 'base-styles';

const WeatherContainer = styled.div`
  margin-bottom: 20px;

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
 * Renders HomeForecast component
 * @param {Array} props - react props
 * @returns {JSX} react jsx
 */
export default function HomeForecast ({ forecastSummary }) {
  return (
    <WeatherContainer>
      <WeatherTitle>
        Today&#39;s forecast:
      </WeatherTitle>
      <WeatherForecast>
        {forecastSummary}
      </WeatherForecast>
    </WeatherContainer>
  );
}
