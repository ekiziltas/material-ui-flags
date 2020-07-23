'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="red" d="M0 0h640v160H0z" />
      <path fill="#00f" d="M0 160h640v160H0z" />
      <path fill="orange" d="M0 320h640v160H0z" />
    </SvgIcon>
  )
}

