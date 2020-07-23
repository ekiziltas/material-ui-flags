'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#0000b4" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 75.4h640v322.3H0z" />
        <path fill="#d90000" d="M0 157.7h640v157.7H0z" />
      </g>
    </SvgIcon>
  )
}

