'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#00cbff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path d="M0 186h640v108H0z" />
      </g>
    </SvgIcon>
  )
}

