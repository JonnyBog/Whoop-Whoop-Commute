import React from 'react';
import styled from 'styled-components';

import {
  typography
} from 'base-styles';

const CommuteFormIntroCopy = styled.p`
  ${typography.copy}
  width: 100%;
`;

/**
 * Renders CommuteFormIntro component
 * @returns {JSX} react jsx
 */
export default function CommuteFormIntro () {
  return (
    <CommuteFormIntroCopy>
      Pick a work station and an area to travel from on the map - then see the different commutes from that area!
    </CommuteFormIntroCopy>
  );
}
