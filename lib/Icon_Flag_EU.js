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
    _extends({ viewBox: '0 0 810 540' }, props),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'g',
        { id: 's' },
        _react2.default.createElement(
          'g',
          { id: 'c' },
          _react2.default.createElement('path', { id: 't', d: 'M0,0v1h0.5z', transform: 'translate(0,-1)rotate(18)' }),
          _react2.default.createElement('use', { xlinkHref: '#t', transform: 'scale(-1,1)' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'a' },
          _react2.default.createElement('use', { xlinkHref: '#c', transform: 'rotate(72)' }),
          _react2.default.createElement('use', { xlinkHref: '#c', transform: 'rotate(144)' })
        ),
        _react2.default.createElement('use', { xlinkHref: '#a', transform: 'scale(-1,1)' })
      )
    ),
    _react2.default.createElement('rect', { fill: '#039', width: '810', height: '540' }),
    _react2.default.createElement(
      'g',
      { fill: '#fc0', transform: 'scale(30)translate(13.5,9)' },
      _react2.default.createElement('use', { xlinkHref: '#s', y: '-6' }),
      _react2.default.createElement('use', { xlinkHref: '#s', y: '6' }),
      _react2.default.createElement(
        'g',
        { id: 'l' },
        _react2.default.createElement('use', { xlinkHref: '#s', x: '-6' }),
        _react2.default.createElement('use', { xlinkHref: '#s', transform: 'rotate(150)translate(0,6)rotate(66)' }),
        _react2.default.createElement('use', { xlinkHref: '#s', transform: 'rotate(120)translate(0,6)rotate(24)' }),
        _react2.default.createElement('use', { xlinkHref: '#s', transform: 'rotate(60)translate(0,6)rotate(12)' }),
        _react2.default.createElement('use', { xlinkHref: '#s', transform: 'rotate(30)translate(0,6)rotate(42)' })
      ),
      _react2.default.createElement('use', { xlinkHref: '#l', transform: 'scale(-1,1)' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_EU.js.map