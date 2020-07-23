'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#006a4e" d="M0 0h640v480H0z" />
      <circle cx="280" cy="240" r="160" fill="#f42a41" />
    </SvgIcon>
  )
}

