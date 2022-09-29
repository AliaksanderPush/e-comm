import * as React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';

export function NewsIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.9061 14.3856V2.23846C18.9061 1.71574 18.4823 1.29199 17.9596 1.29199H1.49041C0.967693 1.29199 0.543945 1.71574 0.543945 2.23846V17.7613C0.543945 18.284 0.967693 18.7078 1.49041 18.7078H21.5096C22.0323 18.7078 22.4561 18.284 22.4561 17.7613V4.97854"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Line
        x1="2.70496"
        y1="4.57324"
        x2="17.0666"
        y2="4.57323"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Line
        x1="10.3857"
        y1="7.88672"
        x2="17.0666"
        y2="7.88672"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Line
        x1="10.3857"
        y1="11.2002"
        x2="17.0666"
        y2="11.2002"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Line
        x1="10.3857"
        y1="14.5146"
        x2="17.0666"
        y2="14.5146"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Rect
        x="2.70496"
        y="7.88281"
        width="3.82671"
        height="6.63124"
        rx="0.5"
        stroke={color}
        stroke-linejoin="round"
      />
    </Svg>
  );
}
