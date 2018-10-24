import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  mediaQueries,
  typography
} from 'base-styles';

const ResultsCopy = styled.p`
  ${typography.copy}
  margin-bottom: 10px;

  ${mediaQueries.tablet} {
    margin-bottom: 20px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: 30px;
  }
`;

const ResultWrapper = styled.div`
  margin-bottom: 20px;

  ${mediaQueries.tablet} {
    margin-bottom: 30px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: 50px;
  }
`;

const ResultTitle = styled.h2`
  ${typography.heading}
  margin-bottom: 5px;
`;

const JourneyCopy = styled.p`
  ${typography.copy}
  padding: 10px;
  background-color: rgba(204, 204, 204, 0.05);

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    margin-bottom: 20px;

    ${mediaQueries.tablet} {
      margin-bottom: 30px;
    }

    ${mediaQueries.desktop} {
      margin-bottom: 50px;
    }
  }
`;

/**
 * Renders CommuteFormResults component
 * @param {Object} props - react props
 * @returns {JSX} react jsx
 */
export default function CommuteFormResults ({ data }) {
  return (
    <Fragment>
      {
        data
          .filter((element, index, array) =>
            index === array.findIndex(journey => (
              journey.legs[0].departurePoint.commonName === element.legs[0].departurePoint.commonName
            ))
          )
          .sort((a, b) => a.duration - b.duration)
          .map(journey => {
            const { commonName } = journey.legs[0].departurePoint;

            return (
              <ResultWrapper key={commonName}>
                <ResultTitle>
                  {commonName}
                </ResultTitle>
                <ResultsCopy>
                  {journey.duration} {journey.duration === 1 ? 'minute' : 'minutes'}
                </ResultsCopy>
                <Fragment>
                  {
                    journey.legs.map(leg => (
                      <JourneyCopy key={leg.instruction.summary}>
                        {leg.instruction.summary}
                      </JourneyCopy>
                    ))
                  }
                </Fragment>
              </ResultWrapper>
            );
          })
      }
    </Fragment>
  );
}

CommuteFormResults.propTypes = {
  data: PropTypes.shape({}).isRequired
};
