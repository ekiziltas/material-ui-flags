'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#c1272d" d="M640 0H0v480h640z" />
      <path fill="none" stroke="#006233" stroke-width="11.7" d="M320 179.4L284.4 289l93.2-67.6H262.4l93.2 67.6z" />
    </SvgIcon>
  )
}

