'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="pw-a">
          <path fill-opacity=".7" d="M-70.3 0h640v480h-640z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#pw-a)" transform="translate(70.3)">
        <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
        <path fill="#ffde00" d="M335.6 232.1a135.9 130.1 0 11-271.7 0 135.9 130.1 0 11271.7 0z" />
      </g>
    </SvgIcon>
  )
}

