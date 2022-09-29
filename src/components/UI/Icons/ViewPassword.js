import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export function ViewPassword({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.625 9.12012C16.3737 8.6372 15.9933 8.18991 15.5076 7.7921C14.1471 6.67664 11.9625 5.95345 9.50004 5.95345C7.03756 5.95345 4.85335 6.67664 3.49248 7.7921C3.00679 8.18991 2.62639 8.6372 2.37504 9.12012M7.52998 5.95345L6.71021 2.89485M4.21448 7.00083L1.97525 4.76199M17.0209 4.76199L14.7816 7.00122M12.2994 2.89445L11.48 5.95345"
        stroke={color}
        stroke-width="1.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="9.5" cy="10.5" r="2.5" fill={color} />
    </Svg>
  );
}
