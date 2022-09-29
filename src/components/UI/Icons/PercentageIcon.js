import * as React from 'react';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export function PercentageIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.27414 4.73645L11.2822 4.38257C11.6331 4.34129 11.9841 4.45879 12.2394 4.70302L14.0757 6.45951C14.3531 6.72485 14.4848 7.10814 14.4289 7.48792L13.9948 10.4401C13.956 10.7035 13.8297 10.9462 13.6361 11.129L8.47575 16.0027C8.00969 16.4429 7.27803 16.4324 6.82472 15.9791L2.53805 11.6924C2.07231 11.2267 2.07591 10.4705 2.54606 10.0092L7.58292 5.06737C7.7703 4.88352 8.01343 4.76712 8.27414 4.73645Z"
        stroke={color}
        stroke-width="0.846154"
        stroke-linejoin="round"
      />
      <Path
        d="M11.4653 5.45801L12.9274 6.92012"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M12.3539 6.06647L15.0356 3.38477"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Circle
        cx="6.35627"
        cy="10.6137"
        r="0.742883"
        stroke={color}
        stroke-width="0.846154"
      />
      <Circle
        cx="10.7867"
        cy="9.4477"
        r="0.742883"
        stroke={color}
        stroke-width="0.846154"
      />
      <Line
        x1="8.87791"
        y1="7.11572"
        x2="8.87791"
        y2="12.9455"
        stroke={color}
        stroke-width="0.846154"
      />
      <Path
        d="M14.5179 7.46533L15.7442 8.88033C15.9309 9.09571 16.0336 9.37116 16.0336 9.65617V17.0076C16.0336 17.6618 15.5033 18.1922 14.849 18.1922H8.47356C7.81931 18.1922 7.28894 17.6618 7.28894 17.0075V16.6764"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
    </Svg>
  );
}
