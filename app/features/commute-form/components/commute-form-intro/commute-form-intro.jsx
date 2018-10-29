import React from 'react';
import styled from 'styled-components';

import {
  typography
} from 'base-styles';

const CommuteFormIntroCopy = styled.ul`
  ${typography.copy}
  width: 100%;

  li {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 5px;
  }
`;

/**
 * Renders CommuteFormIntro component
 * @returns {JSX} react jsx
 */
export default function CommuteFormIntro () {
  return (
    <CommuteFormIntroCopy>
      <li>Pick your work station by typing in the dropdown.</li>
      <li>Choose the area where you wish to live on the map by moving the red marker.</li>
      <li>Change the radius on the map with the radius picker above the map.</li>
      <li>Hit submit and see the different areas you can live with their commute times.</li>
    </CommuteFormIntroCopy>
  );
}
