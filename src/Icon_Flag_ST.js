'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#12ad2b" d="M0 0h640v480H0z" />
      <path fill="#ffce00" d="M0 137.1h640V343H0z" />
      <path fill="#d21034" d="M0 0v480l240-240" />
      <g id="c" transform="translate(351.6 240) scale(.34286)">
        <g id="b">
          <path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
          <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
        </g>
        <use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(144)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(-144)" xlinkHref="#b" />
        <use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
      </g>
      <use width="100%" height="100%" x="700" transform="translate(-523.2)" xlinkHref="#c" />
    </SvgIcon>
  )
}

