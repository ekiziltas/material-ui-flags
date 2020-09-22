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
      _react2.default.createElement('path', { fill: '#fff', d: 'M0 0h640v480H0z' }),
      _react2.default.createElement('path', { fill: '#00267f', d: 'M0 0h213.337v480H0z' }),
      _react2.default.createElement('path', { fill: '#f31830', d: 'M426.662 0H640v480H426.662z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_FR.js.map