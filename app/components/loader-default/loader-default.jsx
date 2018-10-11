import React from 'react';
import { Pulse } from 'styled-spinkit';

import {
  colors
} from 'base-styles';

/**
 * Renders LoaderDefault component
 * @returns {JSX} react jsx
 */
export default function LoaderDefault () {
  return (
    <Pulse
      color={colors.orange}
      size="100"
    />
  );
}
