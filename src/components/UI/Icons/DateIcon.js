import * as React from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

export function DateIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="4.5"
        y="5.50049"
        width="13"
        height="12"
        rx="0.5"
        stroke="#555555"
      />
      <Line x1="4" y1="8.50049" x2="17" y2="8.50049" stroke={color} />
      <Line x1="7.50012" y1="4" x2="7.50012" y2="7" stroke={color} />
      <Line x1="14.5001" y1="4" x2="14.5001" y2="7" stroke={color} />
    </Svg>
  );
}
