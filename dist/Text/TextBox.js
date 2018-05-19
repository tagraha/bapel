'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  text-align: ', ';\n  line-height: ', ';\n  overflow: hidden;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  ', '\n  text-align: ', ';\n  line-height: ', ';\n  overflow: hidden;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      margin: 0 auto;\n    '], ['\n      margin: 0 auto;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n          max-width: 90%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        '], ['\n          max-width: 90%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n          white-space: normal;\n        '], ['\n          white-space: normal;\n        ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 4.5em;\n    '], ['\n      position: relative;\n      max-height: 4.5em;\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 3em;\n    '], ['\n      position: relative;\n      max-height: 3em;\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 3.75em;\n    '], ['\n      position: relative;\n      max-height: 3.75em;\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 2.5em;\n    '], ['\n      position: relative;\n      max-height: 2.5em;\n    ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 3.375em;\n    '], ['\n      position: relative;\n      max-height: 3.375em;\n    ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n      max-height: 2.25em;\n    '], ['\n      position: relative;\n      max-height: 2.25em;\n    ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n      ::after {\n        content: \'\';\n        text-align: right;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 75%;\n        height: 1.2em;\n        background: linear-gradient(\n          to right,\n          ', ',\n          ', '\n        );\n      }\n    '], ['\n      ::after {\n        content: \'\';\n        text-align: right;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 75%;\n        height: 1.2em;\n        background: linear-gradient(\n          to right,\n          ', ',\n          ', '\n        );\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledTextBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.align === 'center' && props.name === 'clamp-1' && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.align;
}, _Matcher2.default.create('variant', [['normal', '1.5'], ['condensed', '1.25'], ['ultra-condensed', '1.175']]), function (props) {
  return props.name === 'clamp-1' ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.variant === 'normal' && props.name === 'clamp-3' && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.variant === 'normal' && props.name === 'clamp-2' && (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.variant === 'condensed' && props.name === 'clamp-3' && (0, _styledComponents.css)(_templateObject7);
}, function (props) {
  return props.variant === 'condensed' && props.name === 'clamp-2' && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.variant === 'ultra-condensed' && props.name === 'clamp-3' && (0, _styledComponents.css)(_templateObject9);
}, function (props) {
  return props.variant === 'ultra-condensed' && props.name === 'clamp-2' && (0, _styledComponents.css)(_templateObject10);
}, function (props) {
  return (props.name === 'clamp-2' || props.name === 'clamp-3') && !props.noClamp && (0, _styledComponents.css)(_templateObject11, _Matcher2.default.create('clampColor', [['white', 'rgba(255, 255, 255, 0)'], ['black', 'rgba(0, 0, 0, 0)']]), _Matcher2.default.create('clampColor', [['white', 'rgba(255, 255, 255, 1) 75%'], ['black', 'rgba(0, 0, 0, 1) 75%']]));
});

var TextBox = function TextBox(props) {
  return _react2.default.createElement(
    StyledTextBox,
    {
      name: props.name,
      variant: props.variant,
      align: props.align,
      noClamp: props.noClamp,
      clampColor: props.clampColor },
    props.children
  );
};

TextBox.defaultProps = {
  name: 'line-height',
  variant: 'normal',
  align: 'left',
  noClamp: false,
  clampColor: 'white'
};

exports.default = TextBox;