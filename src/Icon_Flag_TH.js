'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#f4f5f8" d="M0 0h640v480H0z" />
        <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
        <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
      </g>
    </SvgIcon>
  )
}

