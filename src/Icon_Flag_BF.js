'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#de0000" d="M640 479.6H.4V0H640z" />
        <path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
        <path fill="#fff300" d="M254.6 276.2l-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4" />
      </g>
    </SvgIcon>
  )
}

