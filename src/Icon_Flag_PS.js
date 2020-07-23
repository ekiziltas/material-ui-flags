'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="ps-a">
          <path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ps-a)" transform="translate(110.6) scale(.9375)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path d="M-246 0H778v170.7H-246z" />
          <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
          <path fill="#090" d="M-246 341.3H778V512H-246z" />
          <path fill="red" d="M-246 512l512-256L-246 0v512z" />
        </g>
      </g>
    </SvgIcon>
  )
}

