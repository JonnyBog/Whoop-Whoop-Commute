import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  typography
} from 'base-styles';

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
    <Fragment>
      <WeatherTitle>
        Today&#39;s forecast:
      </WeatherTitle>
      <WeatherForecast>
        {forecastSummary}
      </WeatherForecast>
    </Fragment>
  );
}
