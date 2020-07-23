'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
      <path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
    </SvgIcon>
  )
}
