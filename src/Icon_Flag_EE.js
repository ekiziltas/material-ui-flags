'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" stroke-width="1pt">
        <rect width="640" height="477.9" rx="0" ry="0" />
        <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0" />
        <path fill="#1291ff" d="M0 0h640v159.3H0z" />
      </g>
    </SvgIcon>
  )
}
