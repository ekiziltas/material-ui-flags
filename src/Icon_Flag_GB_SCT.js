'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#0065bd" d="M0 0h640v480H0z" />
      <path stroke="#fff" stroke-width=".6" d="M0 0l5 3M0 3l5-3" transform="scale(128 160)" />
    </SvgIcon>
  )
}
