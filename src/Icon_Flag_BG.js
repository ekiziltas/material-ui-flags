'use strict';

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function( props )
{
  return(
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" strokeWidth="1pt">
        <path fill="#de2110" d="M0 319.997h640V480H0z"/>
        <path fill="#fff" d="M0 0h640v160.003H0z"/>
        <path fill="#319400" d="M0 160.003h640v160.003H0z"/>
      </g>
    </SvgIcon>
  )
}
