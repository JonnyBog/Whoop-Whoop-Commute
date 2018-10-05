import React from 'react';
import PropTypes from 'prop-types';

import {
  GridContainer,
  GridItem
} from 'base-styles';

import { CommuteForm } from 'features';
import HomeForecast from './components/home-forecast/home-forecast';

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
        <GridItem
          width={[1, 1/1, 1/2]}
          px={[0, 0, 0]}
        >
          <HomeForecast forecastSummary={data.currentForecast[0].forecastSummary} />
        </GridItem>
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
