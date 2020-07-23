'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#ffe600" d="M0 320h640v160.002H0z" />
        <path fill="black" d="M0 0h640v160H0z" />
        <path fill="red" d="M0 160h640v160H0z" />
      </g>
    </SvgIcon>
  )
}
