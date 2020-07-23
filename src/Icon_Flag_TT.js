'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#e00000" fill-rule="evenodd" d="M463.7 480L0 1v478.8l463.7.2zM176.3 0L640 479V.2L176.3 0z" />
      <path fill-rule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z" />
    </SvgIcon>
  )
}

