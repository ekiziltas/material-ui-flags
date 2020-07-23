'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#1eb53a" d="M0 320h640v160H0z" />
      <path fill="#0099b5" d="M0 0h640v160H0z" />
      <path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
      <path fill="#fff" d="M0 163.2h640v153.6H0z" />
      <circle cx="134.4" cy="76.8" r="57.6" fill="#fff" />
      <circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5" />
      <g fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
        <g id="e">
          <g id="d">
            <g id="c">
              <g id="b">
                <path id="a" d="M0-6L-1.9-.3 1 .7" />
                <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
              </g>
              <use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
            </g>
            <use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
            <use width="100%" height="100%" transform="rotate(144)" xlinkHref="#c" />
          </g>
          <use width="100%" height="100%" y="-24" xlinkHref="#d" />
          <use width="100%" height="100%" y="-48" xlinkHref="#d" />
        </g>
        <use width="100%" height="100%" x="24" xlinkHref="#e" />
        <use width="100%" height="100%" x="48" xlinkHref="#e" />
        <use width="100%" height="100%" x="-48" xlinkHref="#d" />
        <use width="100%" height="100%" x="-24" xlinkHref="#d" />
        <use width="100%" height="100%" x="-24" y="-24" xlinkHref="#d" />
      </g>
    </SvgIcon>
  )
}

