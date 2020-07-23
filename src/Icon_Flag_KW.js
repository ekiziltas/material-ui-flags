'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="kw-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#kw-a)" transform="scale(.9375)">
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="#f31830" d="M0 341.3h1024V512H0z" />
        <path fill="#00d941" d="M0 0h1024v170.7H0z" />
        <path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
      </g>
    </SvgIcon>
  )
}

