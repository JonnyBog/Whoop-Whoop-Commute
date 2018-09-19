import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  GridContainer,
  GridItem,
  gridGutterAll
} from 'base-styles';

import { CommuteForm } from 'features';

const HomeContainer = styled(GridContainer)`
  padding-top: 80px;
`;

/**
 * Home
 * @returns {element} JSX
 */
export default function Home ({ data }) {
  return (
    <HomeContainer>
      <GridItem
        width={[1, 1/1, 1/1]}
        py={gridGutterAll}
      >
        {data.currentForecast[0].forecastText}
        <CommuteForm />
      </GridItem>
    </HomeContainer>
  );
}

// https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanMetroStation,NaptanRailStation&radius=1600&lat=51.472184&lon=-0.122644

Home.propTypes = {
  data: PropTypes.shape()
};

Home.defaultProps = {
  data: {}
};
