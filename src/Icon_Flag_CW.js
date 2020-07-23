'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="cw-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
        <path id="b" d="M0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
      </defs>
      <g clip-path="url(#cw-a)" transform="scale(.94)">
        <path fill="#002b7f" d="M0 0h768v512H0z" />
        <path fill="#f9e814" d="M0 320h768v64H0z" />
        <use width="13500" height="9000" x="2" y="2" fill="#fff" transform="scale(42.67)" xlinkHref="#b" />
        <use width="13500" height="9000" x="3" y="3" fill="#fff" transform="scale(56.9)" xlinkHref="#b" />
      </g>
    </SvgIcon>
  )
}

