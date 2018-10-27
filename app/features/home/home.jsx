import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-safety-helmet';

import {
  GridContainer,
  GridItem,
  gridMarginBottomAll
} from 'base-styles';

import { CommuteForm } from 'features';
import HomeForecast from 'features/home/components/home-forecast/home-forecast';

/**
 * Home
 * @returns {element} JSX
 */
export default function Home ({ data }) {
  return (
    <Fragment>
      <Helmet>
        <title>Whoop Whoop Commute - Home</title>
      </Helmet>
      <GridContainer
        mb={gridMarginBottomAll}
      >
        <GridItem
          width={[1, 1/1, 1/1]}
        >
          <GridItem
            width={[1, 1/1, 1/2]}
            px={[0, 0, 0]}
            mb={gridMarginBottomAll}
          >
            <HomeForecast forecastSummary={data.currentForecast[0].forecastSummary} />
          </GridItem>
          <CommuteForm />
        </GridItem>
      </GridContainer>
    </Fragment>
  );
}

Home.propTypes = {
  data: PropTypes.shape()
};

Home.defaultProps = {
  data: {}
};
