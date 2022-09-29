import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export function PayIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.2498 7.02683C13.2498 8.10707 12.3377 9.00851 11.1801 9.00851C10.0226 9.00851 9.11045 8.10707 9.11045 7.02683C9.11045 5.94658 10.0226 5.04515 11.1801 5.04515C12.3377 5.04515 13.2498 5.94658 13.2498 7.02683Z"
        stroke={color}
        stroke-width="0.846154"
      />
      <Path
        d="M8.65969 11.2219H4.23088C3.29625 11.2219 2.53857 10.4643 2.53857 9.52962V4.23039C2.53857 3.29576 3.29625 2.53809 4.23088 2.53809H17.7693C18.704 2.53809 19.4617 3.29576 19.4617 4.23039V9.52962C19.4617 10.4643 18.704 11.2219 17.7693 11.2219H10.6475"
        stroke={color}
        stroke-width="0.846154"
      />
      <Path
        d="M12.0156 12.6383V11.5161H13.9267C13.9821 12.1306 14.0098 13.6323 13.6775 14.7224C13.3451 15.8126 12.8188 16.7798 12.5973 17.1272H8.44265L8.43625 17.1133C8.21111 16.6247 7.6948 15.5041 7.69482 14.8026C7.69486 13.3597 8.27647 13.0124 8.60884 12.5581V9.43196C8.63653 9.16476 8.91984 8.63037 9.5181 8.63037C10.1164 8.63037 10.52 9.11132 10.52 9.43196V12.5581C10.52 12.8788 10.8856 13.1193 11.3509 13.1193C11.8447 13.1193 12.0156 12.8788 12.0156 12.6383Z"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M6.91666 11.2227C6.65741 11.2567 6.13892 11.4883 6.13892 12.1421C6.13892 12.796 6.5998 12.9594 6.83024 12.9594H8.29931"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M5.14192 2.88623C5.08653 3.09999 4.85941 3.62369 4.39409 4.00845C3.92878 4.39321 3.20311 4.43596 2.89844 4.40924"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M16.9412 11.0146C16.9966 10.8009 17.2237 10.2772 17.689 9.89243C18.1544 9.50767 18.88 9.46492 19.1847 9.49164"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M16.9412 2.88623C16.9966 3.09999 17.2237 3.62369 17.689 4.00845C18.1544 4.39321 18.88 4.43596 19.1847 4.40924"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Path
        d="M5.14192 11.0146C5.08653 10.8009 4.85941 10.2772 4.39409 9.89243C3.92878 9.50767 3.20311 9.46492 2.89844 9.49164"
        stroke={color}
        stroke-width="0.846154"
        stroke-linecap="round"
      />
      <Rect
        x="7.34337"
        y="17.3459"
        width="7.04121"
        height="1.69231"
        rx="0.423077"
        stroke={color}
        stroke-width="0.846154"
      />
    </Svg>
  );
}
