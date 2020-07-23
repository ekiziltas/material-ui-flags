'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path d="M0 320h640v160H0z" />
      <path fill="red" d="M0 0h220v480H0z" />
    </SvgIcon>
  )
}
