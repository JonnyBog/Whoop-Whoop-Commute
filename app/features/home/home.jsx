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

Home.propTypes = {
  data: PropTypes.shape()
};

Home.defaultProps = {
  data: {}
};
