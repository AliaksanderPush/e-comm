import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export function StatisticsIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="0.5" y="0.5" width="22" height="15" rx="1.5" stroke={color} />
      <Path d="M8 20L11.5 16L15 20" stroke={color} stroke-linecap="round" />
      <Path
        d="M7 10.5L9.5 8L12.5 10.5L17 6M17 6V8.5M17 6H14.5"
        stroke={color}
        stroke-linecap="round"
      />
      <Circle cx="8" cy="20" r="1" fill={color} />
      <Circle cx="15" cy="20" r="1" fill={color} />
      <Rect width="23" height="3" rx="1" fill={color} />
    </Svg>
  );
}
