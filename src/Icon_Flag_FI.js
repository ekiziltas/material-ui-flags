'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#003580" d="M0 174.5h640v131H0z" />
      <path fill="#003580" d="M175.5 0h130.9v480h-131z" />
    </SvgIcon>
  )
}
