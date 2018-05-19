'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  margin: 0 auto;\n  background: #e3e6e9;\n  padding: 0;\n'], ['\n  ', ';\n  margin: 0 auto;\n  background: #e3e6e9;\n  padding: 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n          max-width: 64rem;\n        '], ['\n          max-width: 64rem;\n        ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n          width: 117rem;\n        '], ['\n          width: 117rem;\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.variant === 'mobile' ? (0, _styledComponents.css)(_templateObject2) : (0, _styledComponents.css)(_templateObject3);
});

exports.default = Container;