'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#072B5F" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="M340.4 1a237.1 237.1 0 0197.4 29.9L455 .9h6.1l-18.8 32.7a241.2 241.2 0 0184.2 84.1L640 52.2v6.2l-110.8 64a239 239 0 0130.8 115h80v5.3h-80v1.3a239 239 0 01-30.8 113.7l110.8 64v6.2l-113.5-65.5a241.2 241.2 0 01-84.2 84.1l18.8 32.6H455l-17.2-29.9a238.4 238.4 0 01-96.4 29.9h-42.6c-34.8-3-67.4-13.6-96.4-29.9l-17.2 29.9H179l18.8-32.6a241.2 241.2 0 01-84.2-84.1L.1 427.9v-6.2l110.8-64a238.8 238.8 0 01-30.7-115H0v-5.3h80V236c1-41.2 12-80 31-113.6L.1 58.4v-6.2l113.5 65.5a241.2 241.2 0 0184.2-84.1L179 .9h6.2l17.2 30c29.2-16.5 62.2-27 97.4-30h40.6zM238.6 386.5l-33.5 58a233.5 233.5 0 00112.3 30v-66.9c-28.6-.4-55.4-8-78.8-21zm167 6.9l-6.1 3.5-6.4-2-11.6 2-1-.5c-18 7-37.4 11-57.7 11.2v67h1.2c40.3-.7 78.2-11.6 111.1-30.1l-29.5-51.1zm83.3-53l-9.8.9 2.6 5.9-5.3 5.3-8.6 1.6-2.6 4.7 6.4 3.2-12.2 11.2 3.6 5.9-9.4-2.1-10.7 6.4-14.3 6.8-3.2 4.8-2.2-1.8 2.2-4.6-9.5 3.5-2.1-3.5-3.6 2 29.5 51.2c33.9-20 62.2-48.4 82.3-82.2l-33.1-19.1zm-312.7-14.3l-58 33.5a236.4 236.4 0 0082.3 82.2l33.4-58a168.6 168.6 0 01-57.7-57.7zm119.6 6.4l-1.6 2.7-7.5.5h-2l-3.1 5.4-9-6.4-5 1.6.8 4.3-2.5-1.4-24.7 42.7c22.7 12.6 48.6 20 76.2 20.4v-64.8l-.3-.1-21.3-4.9zm52.1 4.9l-3.9 1.7 1.8 5.2h-13.4l-9.6-4.2v62.2a162 162 0 0051-9l-3.2-1.9-12.7 3.2-11.2-7.1v2.8L344 387l3.2-3.2-.5-9.7h3.7l2.2-6.2 2.7-1.3-2.2-3.2 3.2-1-.5-4.9-3.2-1.4 4.3-.5-2.7-11.6-6.3-6.4zM206 309l-25.2 14.5c13.8 22.9 33 42 55.8 55.8l24.6-42.6-4.6-2.5-.5 4.3-11.6-5.3-.6.5-5.9 2.1-1-4.2-13.8-6.8-14.8-4.8-2.4-11zm304.8-66.3l1.1 3.4-1.6 7.5 3.2 4.3 8.4 1.6-8.4 11.6 1.6 2 2.2 2.3-3.8 5.7 3.6 2.1-18.6 15.4 4.3 10.7-1 6.2-6.5 2.1-1.6 5.4-7.1 3.2-2 5.7 40 23.1a233.5 233.5 0 0030.1-112.3h-43.9zm-425.3 0v1.2c.7 40.4 11.5 78.2 30 111.1l58-33.4a166.9 166.9 0 01-21-78.9h-67zm72.3 0a161 161 0 0020.4 76.2l26.7-15.4-5-8.9 2.6-12.8-4.8-1.6-1.6-5.4 8-.9h-3.5l.3-8-11.6 3.6-.5-3-1.6 5.8-6.2 2.5-4.5-4-1.4-4.4-1.8-8.3 3.7-2.7 1.6 2 1.1-2.5-1.7-12.2h-20.2zm41.3 38.4l-1.6 3.5-5.1 1.1 3.2-4.3 3.5-.3zm-26-84.8l-3.7 5.2-1.1-3.6-4.8 1.5-.7.3c-3 12-4.8 24.7-5 37.7h19.5l-.3-1.6 4.3.9 2.3-19.9.6-.7 4.2-2.5-5.3.6-2-4.8 9.5-10.7-8.6-1.5-6.4 6.3-2.5-7.2zM524.6 125l-43.8 25.4 10.4 26.3-5.9 5.4-.3 6.2-3.9 4.7.7 2.3 3.7 2.5-2.1 1.7 4.6 4.7 7.3 1.2 2.3 3 2 4.3 5.3 2.2 6.5-4.3 4.2.5-5.3 7.5 5.3 13.8-6 5h45v-1.2a233.4 233.4 0 00-30-111.2zm-409 0a233.5 233.5 0 00-30 112.4h66.8v-.1c.3-17.2 3.2-33.8 8.3-49.4l-1.5.4-.4-5.3h3.6c.5-1.5 1-3 1.7-4.5l-5-8.4-3 1-2-3.5-1.2 3.2-3.2-2.3 3.2-2-4.8-1.7 1.1-2.5-3.8-2.2-1-8.4-3.8-1.2 2.4-1.4-4.3-10.7-23.1-13.4zm91.4 53l4.7 5.6 2.7-1.3-7.4-4.3zm-39 5h.7l-.2-1.2-.5 1.3zm68.5-82.1a164.3 164.3 0 00-55.8 55.7l40.7 23.5 30-6.9 1.2-6.4 2.5 1.3-.6-2.2 1.8-1 7.3-2.7v-7.3l2.5-2.8-29.6-51.2zm-85 74.1v.2-.2zm-5.3-7.1l6 3.6-.7 3.5-5.3-7.1zm54.2-129.6a235.8 235.8 0 00-82.2 82.2l21 12.1 1.3-9.5h3.2l-.5 4v.2h-.2l.1.7-.2 2 5.6 8 21 12.2.5-.7 1.4 1.8 4.7 2.7a168 168 0 0157.7-57.8l-33.4-58zm-61.8 107.6v.8l-1.5 4-1.7-4.8h3.2zm301-107.6L407 94.9l2.3-.8.7 4.3 3.4 2.2 2.5-4.4h3l1.9 9.7 7.2 5.7 2.2-1 5.9-2.2 16.4 5.7 3-1 1.3 5.8 4.3.7-1.1-2.8h3.5l1.1 5.9 4.3-4.7 10.2 6.3 2.6 11.6-4.2 1.2 1 8.4 43.5-25a235.8 235.8 0 00-82.3-82.3zm-302.5 103l1.6 3.8-3.2-2.2 1.6-1.6zm179-63.5h.8c-27.5.5-53.3 7.9-75.8 20.4l27 46.6 1.2-5-1.6-4.7 7.5-17.9v-11.4h3.6l4.5-6.4 5.3-1.6.5-6 7.2-8.8 3.4 1.7 14.8-5.3 1.5-1.6zM146.8 126v4h-.2v.4l-3.2-.3-.3-2 .1-.8v-.3l3.6-1zm-1.3-9.9l-2.1 4.9-1-2.2v-.3l3.1-2.4zm234-27l7 6 7.6.6c-4.7-2.5-9.6-4.7-14.5-6.6zM322.9 5.5v66.9c14.4.2 28.3 2.2 41.5 5.8l1.3-.7v1.1c12.7 3.6 24.8 8.6 36 14.9l33.5-58a233.5 233.5 0 00-112.3-30zm-2.7 0a234 234 0 00-115 30l33.5 58c23.4-13 50.2-20.7 78.8-21.1v-67h2.7zm26.2 74.3l11.3 2.5.2-.2c-3.8-1-7.6-1.7-11.5-2.3zm-22.2-2l15.5 3.6 2.3-2.3c-6-.7-12-1.1-18-1.4z" />
      <path fill="#072B5F" d="M321.5 69.1l1.6 8.4 1 .2h-1.3v71.4c14.6.4 28.4 4.3 40.5 10.8L399 98.1a162 162 0 00-4.8-2.5l2 .1 6 .9 4.8-1.7-.7 1.2 3.7 2.3v.5l3.2 2 .2-.3 7.4 5.3.5 2.5 2.5.5-.6 4.3-.3.5h.9l4.2-2a167.6 167.6 0 0136 42.2l14.5-8.4v.5l1.6 2.7.7 1.7-14.1 8.1c6 10.8 10.9 22.4 14.4 34.5l-1 1.2 1.7 1a168 168 0 016 42.2h21.8l-.4.3 1.6 5h-23v.1c-.5 28.6-8 55.4-21.1 78.8l18 10.3-.5 1-1.6 3.7 7.5 3.9H489l-25-14.2a168.6 168.6 0 01-57.7 57.7l4 6.8-4.7 2.8-4-6.9a167 167 0 01-21.1 10l-2.2-1.2-1.1-.4-2-1.2h-.1l1.8 1-2-.8-1.2-.7a155 155 0 0025.3-11.3l-35.7-61.8a90.5 90.5 0 01-40.5 10.8v9.2l-1.4-.6-4-2V331a90.5 90.5 0 01-40.5-10.8l-11 19.1-4.7-2.6 11.1-19.2a91.5 91.5 0 01-29.6-29.7L206 309l-.2-1.2V305l-1-1.5 35.2-20.3a90.5 90.5 0 01-10.8-40.5H178l-.7-5.3h51.9a90.5 90.5 0 0110.8-40.5l-25.5-14.7 2-1 5-1.2 21.2 12.2a91.5 91.5 0 0129.6-29.6l-6.1-10.6 2-7.3 8.7 15.2a90.5 90.5 0 0140.5-10.8V77.7h-1.3l.3-.2 3-3.2-1-5.2h3.1zM377 395h.3l1 .7-1.3-.7zm20.6-107a91.5 91.5 0 01-29.6 29.6l35.7 61.8c22.9-13.7 42-33 55.8-55.8l-61.9-35.7zm-74.8-38v75.6a86 86 0 0037.8-10L322.8 250zm-5.4 0l-37.8 65.5a84.8 84.8 0 0037.8 10.1V250zm165-7.3h-71.3a90.5 90.5 0 01-10.9 40.5l61.9 35.7a162.1 162.1 0 0020.3-76.2zm-155 4.7l37.8 65.4a86 86 0 0027.7-27.6l-65.5-37.8zm-14.6 0l-65.5 37.8a86 86 0 0027.7 27.6l37.8-65.4zm-2.7-4.7h-75.6c.4 13.7 4 26.5 10.1 37.8l65.5-37.8zm95.6 0h-75.6l65.5 37.8c6-11.3 9.7-24.1 10.1-37.8zm-10.1-43.1L330 237.4h75.6c-.4-13.7-4-26.5-10.1-37.8zm-151 0a85.2 85.2 0 00-10 37.8H310l-65.5-37.8zm217.5-38.4l-61.9 35.7a90.5 90.5 0 0110.9 40.5h71.3c-.4-27.7-7.8-53.6-20.3-76.2zm-187.1 6a86 86 0 00-27.7 27.7l65.5 37.8-37.8-65.5zm90.2 0l-37.8 65.5L393 195a86 86 0 00-27.7-27.7zm-47.8-12.8c-13.6.5-26.5 4-37.8 10.2l37.8 65.5v-75.7zm5.4 0V230l37.8-65.4a85.2 85.2 0 00-37.8-10.2zm-160 45.3l-2.4 1.3 2.5-9.7-2.1-1 1.2-2.7-1.3.3c.5-1.6 1-3.3 1.7-5h5.7c-2 5.5-3.8 11.1-5.3 16.8zm240.8-99l-35.7 62a91.5 91.5 0 0129.6 29.5l61.9-35.7c-13.8-22.8-33-42-55.8-55.7zm-264.3 31.8l9.3 5.4 2.2 3.1 5.7 7.5 11.8 3.2v.4l1.3-2 2 1 4.7 5.8 3.2 3.6 1.6 1.8 17.9 8.5 3.2 1.6 1 1 3.9 4.5-29-16.7c-3.6 6.5-6.8 13.4-9.5 20.5l-.3-1.4H165l-1-1.8a167 167 0 019.4-20l-34.8-20-.2-.7.5-3.6.3-1.7zm226.4-53.9l.3 3.7 6.4.7 5.3 4.1h-.5v.6h1l.6.5.9.8c-7-2.8-14.4-5.1-21.9-7l.3-.2 6.2-3.6 1.4.4zm-23.5.2l1.1.3 3 .7-3.2-.5-1-.4.6.3h-.8l.3-.4zm-24.6-1h-.2.2zm2.5-.1h-2.5 2.5z" />
    </SvgIcon>
  )
}
