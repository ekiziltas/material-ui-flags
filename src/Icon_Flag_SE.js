'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#066aa7" d="M0 0h640v480H0z" />
      <path fill="#fecc00" d="M0 192h640v96H0z" />
      <path fill="#fecc00" d="M176 0h96v480h-96z" />
    </SvgIcon>
  )
}

