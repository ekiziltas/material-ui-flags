'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="bj-a">
          <path fill="gray" d="M67.6-154h666v666h-666z" />
        </clipPath>
      </defs>
      <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#319400" d="M0-154h333v666H0z" />
          <path fill="#ffd600" d="M333-154h666v333H333z" />
          <path fill="#de2110" d="M333 179h666v333H333z" />
        </g>
      </g>
    </SvgIcon>
  )
}

