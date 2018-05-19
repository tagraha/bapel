'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      opacity: ', ';\n    '], ['\n      opacity: ', ';\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      margin: ', ';\n    '], ['\n      margin: ', ';\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: ', ';\n    '], ['\n      margin-top: ', ';\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      margin-bottom: ', ';\n    '], ['\n      margin-bottom: ', ';\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      margin-left: ', ';\n    '], ['\n      margin-left: ', ';\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      margin-right: ', ';\n    '], ['\n      margin-right: ', ';\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      margin-top: ', ';\n      margin-bottom: ', ';\n    '], ['\n      margin-top: ', ';\n      margin-bottom: ', ';\n    ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n      margin-left: ', ';\n      margin-right: ', ';\n    '], ['\n      margin-left: ', ';\n      margin-right: ', ';\n    ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n      padding: ', ';\n    '], ['\n      padding: ', ';\n    ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n      padding-top: ', ';\n    '], ['\n      padding-top: ', ';\n    ']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n      padding-bottom: ', ';\n    '], ['\n      padding-bottom: ', ';\n    ']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n      padding-left: ', ';\n    '], ['\n      padding-left: ', ';\n    ']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n      padding-right: ', ';\n    '], ['\n      padding-right: ', ';\n    ']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n      padding-top: ', ';\n      padding-bottom: ', ';\n    '], ['\n      padding-top: ', ';\n      padding-bottom: ', ';\n    ']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n      padding-left: ', ';\n      padding-right: ', ';\n    '], ['\n      padding-left: ', ';\n      padding-right: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Unit = require('../Utils/Unit');

var _Unit2 = _interopRequireDefault(_Unit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledView = _styledComponents2.default.div(_templateObject, function (props) {
  return props.opacity && (0, _styledComponents.css)(_templateObject2, props.opacity);
}, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject3, _Unit2.default.numToRem(props.margin));
}, function (props) {
  return props.marginTop && (0, _styledComponents.css)(_templateObject4, _Unit2.default.numToRem(props.marginTop));
}, function (props) {
  return props.marginBottom && (0, _styledComponents.css)(_templateObject5, _Unit2.default.numToRem(props.marginBottom));
}, function (props) {
  return props.marginLeft && (0, _styledComponents.css)(_templateObject6, _Unit2.default.numToRem(props.marginLeft));
}, function (props) {
  return props.marginRight && (0, _styledComponents.css)(_templateObject7, _Unit2.default.numToRem(props.marginRight));
}, function (props) {
  return props.marginY && (0, _styledComponents.css)(_templateObject8, _Unit2.default.numToRem(props.marginY), _Unit2.default.numToRem(props.marginY));
}, function (props) {
  return props.marginX && (0, _styledComponents.css)(_templateObject9, _Unit2.default.numToRem(props.marginX), _Unit2.default.numToRem(props.marginX));
}, function (props) {
  return props.padding && (0, _styledComponents.css)(_templateObject10, _Unit2.default.numToRem(props.padding));
}, function (props) {
  return props.paddingTop && (0, _styledComponents.css)(_templateObject11, _Unit2.default.numToRem(props.paddingTop));
}, function (props) {
  return props.paddingBottom && (0, _styledComponents.css)(_templateObject12, _Unit2.default.numToRem(props.paddingBottom));
}, function (props) {
  return props.paddingLeft && (0, _styledComponents.css)(_templateObject13, _Unit2.default.numToRem(props.paddingLeft));
}, function (props) {
  return props.paddingRight && (0, _styledComponents.css)(_templateObject14, _Unit2.default.numToRem(props.paddingRight));
}, function (props) {
  return props.paddingY && (0, _styledComponents.css)(_templateObject15, _Unit2.default.numToRem(props.paddingY), _Unit2.default.numToRem(props.paddingY));
}, function (props) {
  return props.paddingX && (0, _styledComponents.css)(_templateObject16, _Unit2.default.numToRem(props.paddingX), _Unit2.default.numToRem(props.paddingX));
});

var View = function View(props) {
  return _react2.default.createElement(
    StyledView,
    {
      opacity: props.opacity,
      margin: props.margin,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      marginY: props.marginY,
      marginX: props.marginX,
      padding: props.padding,
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
      paddingRight: props.paddingRight,
      paddingY: props.paddingY,
      paddingX: props.paddingX },
    props.children
  );
};

View.defaultProps = {
  margin: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginY: 0,
  marginX: 0,
  padding: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingY: 0,
  paddingX: 0,
  opacity: 1
};

exports.default = View;