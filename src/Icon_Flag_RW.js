'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#20603d" d="M0 0h640v480H0z" />
      <path fill="#fad201" d="M0 0h640v360H0z" />
      <path fill="#00a1de" d="M0 0h640v240H0z" />
      <g transform="translate(511 125.4) scale(.66667)">
        <g id="b">
          <path id="a" fill="#e5be01" d="M116.1 0L35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z" />
          <use width="100%" height="100%" transform="scale(1 -1)" xlinkHref="#a" />
        </g>
        <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#b" />
        <circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4" />
      </g>
    </SvgIcon>
  )
}

