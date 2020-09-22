'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="640" height="480" viewBox="-5 -5 30 20">
      <rect fill="#de2910" x="-5" y="-5" width="30" height="20"/>
      <defs>
        <polygon id="s" points="0,-513674 301930,415571 -488533,-158734 488533,-158734 -301930,415571" fill="#ffde00" transform="scale(0.0000019467600073)"/>
      </defs>
      <use xlinkHref="#s" transform="scale(3)"/>
      <use xlinkHref="#s" transform="translate(5,-3) rotate(-120.963756)"/>
      <use xlinkHref="#s" transform="translate(7,-1) rotate(-98.130102)"/>
      <use xlinkHref="#s" transform="translate(7,2) rotate(-74.054604)"/>
      <use xlinkHref="#s" transform="translate(5,4) rotate(-51.3401917)"/>
    </svg>
  )
}
