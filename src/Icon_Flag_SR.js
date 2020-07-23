'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#377e3f" d="M.1 0h640v480H.1z" />
      <path fill="#fff" d="M.1 96h640v288H.1z" />
      <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
      <path fill="#ecc81d" d="M320 153.2l56.4 173.6-147.7-107.3h182.6L263.6 326.8z" />
    </SvgIcon>
  )
}

