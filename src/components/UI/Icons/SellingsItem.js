import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export function SellingsIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.8157 13.2589L9.96183 13.8051C9.80678 13.9043 9.70585 14.0692 9.68805 14.2524L9.4483 16.7193C9.4353 16.853 9.4676 16.9873 9.54002 17.1005L12.1689 21.2102C12.3474 21.4893 12.7183 21.5708 12.9974 21.3923L16.4949 19.155C16.7739 18.9765 16.8554 18.6056 16.6769 18.3265L14.052 14.223C13.9771 14.106 13.864 14.0186 13.732 13.9757L11.3242 13.1937C11.1535 13.1383 10.9669 13.1622 10.8157 13.2589Z"
        stroke={color}
        stroke-linecap="round"
      />
      <Path
        d="M9.69604 19.7298H3C1.89543 19.7298 1 18.8344 1 17.7298V8.01685C1 6.91228 1.89543 6.01685 3 6.01685H11.5424C12.6469 6.01685 13.5424 6.91228 13.5424 8.01685V12.4553"
        stroke={color}
        stroke-linecap="round"
      />
      <Path
        d="M11.3684 6.01695V2.19959C11.3684 1.53708 10.8313 1 10.1688 1H4.37366C3.71115 1 3.17407 1.53707 3.17407 2.19959V6.01695"
        stroke={color}
      />
      <Path
        d="M9.53399 6.01696V3.83236C9.53399 3.37266 9.16133 3 8.70163 3H5.84091C5.38121 3 5.00854 3.37266 5.00854 3.83236V6.01696"
        stroke={color}
      />
      <Circle cx="6.00339" cy="11.0034" r="0.503389" stroke={color} />
      <Circle cx="8.67917" cy="13.0103" r="0.503389" stroke={color} />
      <Path
        d="M5.75269 13.5955L8.93008 10.4181"
        stroke={color}
        stroke-linecap="round"
      />
      <Path d="M13 15L15.2576 18.4282" stroke={color} stroke-linecap="round" />
    </Svg>
  );
}
