'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <g id="d" transform="translate(0 -36)">
          <g id="c">
            <g id="b">
              <path id="a" fill="#fff" d="M0-5L-1.5-.2l2.8.9z" />
              <use width="180" height="120" transform="scale(-1 1)" xlinkHref="#a" />
            </g>
            <use width="180" height="120" transform="rotate(72)" xlinkHref="#b" />
          </g>
          <use width="180" height="120" transform="rotate(-72)" xlinkHref="#b" />
          <use width="180" height="120" transform="rotate(144)" xlinkHref="#c" />
        </g>
      </defs>
      <path fill="#cf142b" d="M0 0h640v480H0z" />
      <path fill="#00247d" d="M0 0h640v320H0z" />
      <path fill="#fc0" d="M0 0h640v160H0z" />
      <g id="f" transform="matrix(4 0 0 4 320 336)">
        <g id="e">
          <use width="180" height="120" transform="rotate(10)" xlinkHref="#d" />
          <use width="180" height="120" transform="rotate(30)" xlinkHref="#d" />
        </g>
        <use width="180" height="120" transform="rotate(40)" xlinkHref="#e" />
      </g>
      <use width="180" height="120" transform="rotate(-80 320 336)" xlinkHref="#f" />
    </SvgIcon>
  )
}

