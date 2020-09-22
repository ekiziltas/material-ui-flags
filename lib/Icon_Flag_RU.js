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
      { id: 'flag', fillRule: 'evenodd', strokeWidth: '1pt', transform: 'matrix(1.25 0 0 .93750 0 -.0000020021)' },
      _react2.default.createElement('rect', { id: 'rect171', height: '512', width: '512', y: '.0000024116', x: '0', fill: '#fff' }),
      _react2.default.createElement('rect', { id: 'rect403', height: '341.33', width: '512', y: '170.67', x: '0', fill: '#01017e' }),
      _react2.default.createElement('rect', { id: 'rect135', height: '170.67', width: '512', y: '341.33', x: '0', fill: '#fe0101' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_RU.js.map