'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="sc-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#sc-a)" transform="scale(.9375)">
        <path fill="red" d="M0 0h992.1v512H0z" />
        <path fill="#090" d="M0 512l992.1-170.7V512H0z" />
        <path fill="#fff" d="M0 512l992.1-341.3v170.6L0 512z" />
        <path fill="#009" d="M0 512V0h330.7L0 512z" />
        <path fill="#ff0" d="M0 512L330.7 0h330.7L0 512z" />
      </g>
    </SvgIcon>
  )
}

