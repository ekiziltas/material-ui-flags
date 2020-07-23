'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#ffd500" d="M0 0h640v480H0z" />
        <path fill="#005bbb" d="M0 0h640v240H0z" />
      </g>
    </SvgIcon>
  )
}

