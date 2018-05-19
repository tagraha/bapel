'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  opacity: ', ';\n  background: ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  opacity: ', ';\n  background: ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      height: ', ';\n      width: 100%;\n      clear: both;\n      position: relative;\n      z-index: 8;\n    '], ['\n      height: ', ';\n      width: 100%;\n      clear: both;\n      position: relative;\n      z-index: 8;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      height: 100%;\n      width: ', ';\n      position: relative;\n      z-index: 8;\n    '], ['\n      height: 100%;\n      width: ', ';\n      position: relative;\n      z-index: 8;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSeparator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.opacity;
}, _Matcher2.default.create('color', [['regular', '#e6e6e6'], ['white', '#fff'], ['black', '#000']]), function (props) {
  return props.direction === 'horizontal' && (0, _styledComponents.css)(_templateObject2, props.width);
}, function (props) {
  return props.direction === 'vertical' && (0, _styledComponents.css)(_templateObject3, props.width);
});

var Separator = function Separator(props) {
  return _react2.default.createElement(StyledSeparator, props);
};

Separator.defaultProps = {
  direction: 'horizontal',
  color: 'regular',
  opacity: 1,
  width: '0.1rem'
};

exports.default = Separator;