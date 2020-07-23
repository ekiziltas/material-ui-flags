'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#ce1126" d="M0 0h220v480H0z" />
      <path fill="#fcd116" d="M220 0h420v240H220z" />
      <path fill="#009e49" d="M220 240h420v240H220z" />
      <g id="b" transform="matrix(80 0 0 80 110 240)">
        <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
      </g>
      <use width="100%" height="100%" transform="rotate(72 110 240)" xlinkHref="#b" />
      <use width="100%" height="100%" transform="rotate(144 110 240)" xlinkHref="#b" />
      <use width="100%" height="100%" transform="rotate(-144 110 240)" xlinkHref="#b" />
      <use width="100%" height="100%" transform="rotate(-72 110 240)" xlinkHref="#b" />
    </SvgIcon>
  )
}

