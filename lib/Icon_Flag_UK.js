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
      _react2.default.createElement('path', { fill: '#012169', d: 'M0 0h640v480H0z' }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z' }),
      _react2.default.createElement('path', { fill: '#C8102E',
        d: 'M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z' }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M241 0v480h160V0H241zM0 160v160h640V160H0z' }),
      _react2.default.createElement('path', { fill: '#C8102E', d: 'M0 193v96h640v-96H0zM273 0v480h96V0h-96z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_UK.js.map