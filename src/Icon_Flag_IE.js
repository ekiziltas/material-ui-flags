'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#009A49" d="M0 0h213.3v480H0z" />
        <path fill="#FF7900" d="M426.7 0H640v480H426.7z" />
      </g>
    </SvgIcon>
  )
}

