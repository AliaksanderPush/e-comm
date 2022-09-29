import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export function LogoutIcon({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.44447 4.66664H17.8889V12.2889H19.4445V4.66664C19.4445 4.25408 19.2806 3.85842 18.9889 3.5667C18.6971 3.27497 18.3015 3.11108 17.8889 3.11108H5.44447C5.03191 3.11108 4.63625 3.27497 4.34453 3.5667C4.0528 3.85842 3.88892 4.25408 3.88892 4.66664V23.3333C3.88892 23.7459 4.0528 24.1415 4.34453 24.4333C4.63625 24.725 5.03191 24.8889 5.44447 24.8889H17.8889C18.3015 24.8889 18.6971 24.725 18.9889 24.4333C19.2806 24.1415 19.4445 23.7459 19.4445 23.3333H5.44447V4.66664Z"
        fill={color}
      />
      <Path
        d="M21.9022 13.44C21.7534 13.3125 21.5621 13.2459 21.3663 13.2535C21.1706 13.2611 20.9849 13.3422 20.8464 13.4807C20.7078 13.6193 20.6267 13.8049 20.6191 14.0007C20.6116 14.1964 20.6782 14.3878 20.8056 14.5366L23.4345 17.1111H12.1567C11.9504 17.1111 11.7526 17.193 11.6067 17.3389C11.4609 17.4847 11.3789 17.6826 11.3789 17.8888C11.3789 18.0951 11.4609 18.293 11.6067 18.4388C11.7526 18.5847 11.9504 18.6666 12.1567 18.6666H23.4345L20.8056 21.3577C20.7242 21.4275 20.658 21.5133 20.6113 21.6098C20.5647 21.7062 20.5384 21.8114 20.5343 21.9185C20.5301 22.0256 20.5482 22.1324 20.5873 22.2322C20.6264 22.332 20.6857 22.4227 20.7615 22.4985C20.8373 22.5743 20.928 22.6336 21.0278 22.6727C21.1276 22.7118 21.2344 22.7298 21.3415 22.7257C21.4486 22.7215 21.5537 22.6953 21.6502 22.6486C21.7467 22.6019 21.8325 22.5358 21.9022 22.4544L26.4445 17.9433L21.9022 13.44Z"
        fill={color}
      />
    </Svg>
  );
}
