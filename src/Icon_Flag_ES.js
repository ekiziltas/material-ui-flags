'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function( props )
{
  return(
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#AD1519" d="M 0 0 H 640 V 480 H 0 Z"/>
        <path fill="#FABD00" d="M 0 120 H 640 V 360 H 0 Z"/>
      </g>
    </SvgIcon>
  )
}
