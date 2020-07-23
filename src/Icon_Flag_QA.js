'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#8d1b3d" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0v480h158.4l97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6L256.1 80l-97.7-26.7 97.8-26.6L158.3 0H0z" />
    </SvgIcon>
  )
}

