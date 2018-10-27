import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  typography,
  mediaQueries
} from 'base-styles';

const WeatherContainer = styled.div`
  background: rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  padding: 15px;

  ${mediaQueries.tablet} {
    padding: 20px;
  }

  ${mediaQueries.desktop} {
    padding: 30px;
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
 * @param {Object} props - react props
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

HomeForecast.propTypes = {
  forecastSummary: PropTypes.string.isRequired
};
