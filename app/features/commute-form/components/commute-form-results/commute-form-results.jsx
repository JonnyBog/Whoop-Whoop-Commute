import React, { Fragment } from 'react';

/**
 * Renders CommuteFormResults component
 * @param {Array} props - react props
 * @returns {JSX} react jsx
 */
export default function CommuteFormResults ({ data }) {
  return (
    <Fragment>
      <h2>Results:</h2>
      {
        data.map(journey => {
          const { commonName } = journey.legs[0].departurePoint;

          return (
            <div key={journey.legs[0].instruction.summary}>
              <p>station: {commonName}</p>
              <p>duration: {journey.duration}</p>
              <div>
                instructions:
                {
                  journey.legs.map(leg => (
                    <p key={leg.instruction.summary}>{leg.instruction.summary}</p>
                  ))
                }
              </div>
            </div>
          );
        })
      }
    </Fragment>
  );
}
