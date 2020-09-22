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
    _extends({ viewBox: '-5 -5 30 20' }, props),
    _react2.default.createElement('rect', { fill: '#de2910', x: '-5', y: '-5', width: '30', height: '20' }),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('polygon', { id: 's', points: '0,-513674 301930,415571 -488533,-158734 488533,-158734 -301930,415571', fill: '#ffde00',
        transform: 'scale(0.0000019467600073)' })
    ),
    _react2.default.createElement('use', { xlinkHref: '#s', transform: 'scale(3)' }),
    _react2.default.createElement('use', { xlinkHref: '#s', transform: 'translate(5,-3) rotate(-120.963756)' }),
    _react2.default.createElement('use', { xlinkHref: '#s', transform: 'translate(7,-1) rotate(-98.130102)' }),
    _react2.default.createElement('use', { xlinkHref: '#s', transform: 'translate(7,2) rotate(-74.054604)' }),
    _react2.default.createElement('use', { xlinkHref: '#s', transform: 'translate(5,4) rotate(-51.3401917)' })
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_CN.js.map