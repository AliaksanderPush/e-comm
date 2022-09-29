import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export function InventoryIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.0881 8.64795V20.5976"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.32092 16.7736L9.32092 22.0314"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.5 7.5C7.49999 6.66352 8.14973 5.42126 9.67929 5.42126C11.2088 5.42126 15.0168 5.42126 16.8491 5.42126C18.0441 5.42126 19 6.49674 19 8.05019C19 9.67816 18.9602 18.3668 19 22.5093C18.9204 22.828 18.6177 23.4653 18.0441 23.4653C17.4705 23.4653 13.9015 23.4653 12.1887 23.4653"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.2956 5.30188V2.9C15.2956 1.85066 14.433 1 13.3836 1V1C12.3343 1 11.4717 1.85066 11.4717 2.9V5.30188"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.84276 14.8617V10.6793C8.84276 9.82136 8.14725 9.12585 7.2893 9.12585V9.12585C6.43135 9.12585 5.73584 9.82136 5.73584 10.6793V14.8617"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.34607 17.3711V16.7617C3.34607 15.7124 4.19673 14.8617 5.24607 14.8617H9.33286C10.3822 14.8617 11.2329 15.7124 11.2329 16.7617V21.5655C11.2329 22.6148 10.3822 23.4655 9.33286 23.4655H6.81148"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Rect
        x="0.5"
        y="18.7076"
        width="4.73585"
        height="4.25786"
        rx="1.4"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M0.655396 20.3801L3 20.3801"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
