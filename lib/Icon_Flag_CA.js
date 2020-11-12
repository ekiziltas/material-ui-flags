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
    _extends({ viewBox: '0 0 640 480' }, props, { fill: '#28ff09' }),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', fill: '#000', d: 'M-79.06 0h682.67v512H-79.06z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { fillOpacity: '1', clipPath: 'url(#a)', transform: 'translate(74.118) scale(.9375)' },
      _react2.default.createElement('path', { fill: '#fff', d: 'M81.137 0h362.276v512H81.137z' }),
      _react2.default.createElement('path', { fill: '#bf0a30', d: 'M-100 0H81.138v512H-100zM443.413 0H624.55v512H443.414zM135.31 247.41l-14.067 4.808 65.456 57.446c4.95 14.764-1.72 19.116-5.97 26.86l71.06-9.02-1.85 71.512 14.718-.423-3.21-70.918 71.13 8.432c-4.402-9.297-8.32-14.233-4.247-29.098l65.414-54.426-11.447-4.144c-9.36-7.222 4.044-34.784 6.066-52.178 0 0-38.195 13.135-40.698 6.262l-9.727-18.685-34.747 38.17c-3.796.91-5.413-.6-6.304-3.808l16.053-79.766-25.42 14.297c-2.128.91-4.256.125-5.658-2.355l-24.45-49.06-25.21 50.95c-1.9 1.826-3.803 2.037-5.382.796l-24.204-13.578 14.53 79.143c-1.156 3.14-3.924 4.025-7.18 2.324l-33.216-37.737c-4.345 6.962-7.29 18.336-13.033 20.885-5.744 2.387-24.98-4.823-37.873-7.637 4.404 15.895 18.176 42.302 9.46 50.957z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Icon_Flag_CA.js.map