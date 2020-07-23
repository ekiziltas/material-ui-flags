'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#00a04d" d="M0 360h640v120H0z" />
        <path fill="#151f6d" d="M0 120h640v120H0z" />
        <path fill="#ee2737" d="M0 0h640v120H0z" />
        <path fill="#ffcd00" d="M0 240h640v120H0z" />
      </g>
    </SvgIcon>
  )
}

