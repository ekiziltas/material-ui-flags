'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#fff" d="M640 480H0V0h640z" />
        <path fill="#dc143c" d="M640 480H0V240h640z" />
      </g>
    </SvgIcon>
  )
}

