'use strict';

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function( props )
{
  return(
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g transform="matrix(.48 0 0 .48 -2.6 2.39)">
        <path fill="#de2910" d="M-5-15.4h30v20H-5z"/>
        <use height="20" width="30" transform="matrix(3 0 0 3 0 -10.4)"/>
        <use height="20" width="30" transform="rotate(-120.93 -1.29 -8.12)"/>
        <use height="20" width="30" transform="rotate(-98.11 -1.45 -8.74)"/>
        <use height="20" width="30" transform="rotate(-74.04 -2.07 -8.84)"/>
        <use height="20" width="30" transform="rotate(-51.32 -4.16 -8.4)"/>
      </g>
    </SvgIcon>
  )
}
