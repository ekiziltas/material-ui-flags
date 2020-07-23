'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#d21034" d="M0 0h640v480H0z" />
      <path fill="#007e3a" d="M120 120h400v240H120z" />
      <circle cx="350" cy="240" r="80" fill="#fff" />
      <circle cx="380" cy="240" r="80" fill="#007e3a" />
    </SvgIcon>
  )
}

