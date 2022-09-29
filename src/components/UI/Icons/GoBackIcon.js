import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function GoBackIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.00001 16L1 8.5M1 8.5L6.00001 0.999999M1 8.5L19.5 8.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
}
