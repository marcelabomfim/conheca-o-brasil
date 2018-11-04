import React from 'react';

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="22"
    width="30"
    version="1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-2100 -1470 4200 2940"
  >
    <rect y="-50%" x="-50%" height="100%" fill="#009b3a" width="100%" />
    <path d="m-1743 0 1743 1113 1743-1113-1743-1113z" fill="#fedf00" />
    <circle r="735" fill="#002776" />
    <clipPath id="band">
      <circle r="735" />
    </clipPath>
    <path
      fill="#fff"
      d="m-2205 1470a1785 1785 0 0 1 3570 0h-105a1680 1680 0 1 0 -3360 0z"
      clipPath="url(#band)"
    />
  </svg>
);
