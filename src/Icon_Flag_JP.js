'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="jp-a">
          <path fill-opacity=".7" d="M-88 32h640v480H-88z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#jp-a)" transform="translate(88 -32)">
        <path fill="#fff" d="M-128 32h720v480h-720z" />
        <circle cx="523.1" cy="344.1" r="194.9" fill="#d30000" transform="translate(-168.4 8.6) scale(.76554)" />
      </g>
    </SvgIcon>
  )
}

