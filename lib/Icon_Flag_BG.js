'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

exports.default = function (props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 640 480' }, props),
    _react2.default.createElement(
      'g',
      { fillRule: 'evenodd', strokeWidth: '1pt' },
      _react2.default.createElement('path', { fill: '#de2110', d: 'M0 319.997h640V480H0z' }),
      _react2.default.createElement('path', { fill: '#fff', d: 'M0 0h640v160.003H0z' }),
      _react2.default.createElement('path', { fill: '#319400', d: 'M0 160.003h640v160.003H0z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@mui/material/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_BG.js.map
