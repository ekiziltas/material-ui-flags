'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#000067" d="M0 0h214v480H0z" />
        <path fill="red" d="M426 0h214v480H426z" />
        <path fill="#ff0" d="M214 0h212v480H214z" />
      </g>
    </SvgIcon>
  )
}

