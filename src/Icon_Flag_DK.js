'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#c8102e" d="M0 0h640.1v480H0z" />
      <path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
      <path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
    </SvgIcon>
  )
}

