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
      _react2.default.createElement('path', { fill: '#AD1519', d: 'M 0 0 H 640 V 480 H 0 Z' }),
      _react2.default.createElement('path', { fill: '#FABD00', d: 'M 0 120 H 640 V 360 H 0 Z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_ES.js.map