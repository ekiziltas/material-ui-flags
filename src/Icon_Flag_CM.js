'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#007a5e" d="M0 0h213.3v480H0z" />
      <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
      <g fill="#fcd116" transform="translate(320 240) scale(7.1111)">
        <g id="b">
          <path id="a" d="M0-8L-2.5-.4 1.3.9z" />
          <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
        </g>
        <use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(144)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(-144)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
      </g>
    </SvgIcon>
  )
}

