import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function HidePassword({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.37502 9.87988C2.62637 10.3628 3.00677 10.8101 3.49246 11.2079C4.85294 12.3234 7.03754 13.0465 9.50002 13.0465C11.9625 13.0465 14.1467 12.3234 15.5076 11.2079C15.9933 10.8101 16.3737 10.3628 16.625 9.87988M11.4701 13.0465L12.2899 16.1052M14.7856 11.9992L17.0248 14.238M1.97919 14.238L4.21842 11.9988M6.70069 16.1055L7.52006 13.0465"
        stroke={color}
        stroke-width="1.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
