'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <g id="d">
          <g id="b">
            <path id="a" d="M0-1l-.3 1 .5.1z" />
            <use transform="scale(-1 1)" xlinkHref="#a" />
          </g>
          <g id="c">
            <use transform="rotate(72)" xlinkHref="#b" />
            <use transform="rotate(144)" xlinkHref="#b" />
          </g>
          <use transform="scale(-1 1)" xlinkHref="#c" />
        </g>
      </defs>
      <path fill="#039" d="M0 0h640v480H0z" />
      <g fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
        <use width="100%" height="100%" y="-6" xlinkHref="#d" />
        <use width="100%" height="100%" y="6" xlinkHref="#d" />
        <g id="e">
          <use width="100%" height="100%" x="-6" xlinkHref="#d" />
          <use width="100%" height="100%" transform="rotate(-144 -2.3 -2.1)" xlinkHref="#d" />
          <use width="100%" height="100%" transform="rotate(144 -2.1 -2.3)" xlinkHref="#d" />
          <use width="100%" height="100%" transform="rotate(72 -4.7 -2)" xlinkHref="#d" />
          <use width="100%" height="100%" transform="rotate(72 -5 .5)" xlinkHref="#d" />
        </g>
        <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#e" />
      </g>
    </SvgIcon>
  )
}
