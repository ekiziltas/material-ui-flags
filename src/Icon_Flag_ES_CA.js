'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#fcdd09" d="M0 0h640v480H0z" />
      <path stroke="#da121a" stroke-width="60" d="M0 90h810m0 120H0m0 120h810m0 120H0" transform="scale(.79012 .88889)" />
    </SvgIcon>
  )
}
