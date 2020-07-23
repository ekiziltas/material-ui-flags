'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#0000cd" d="M0 320.3h640V480H0z" />
        <path fill="#fff" d="M0 160.7h640v159.6H0z" />
        <path fill="#00cd00" d="M0 0h640v160.7H0z" />
      </g>
    </SvgIcon>
  )
}

