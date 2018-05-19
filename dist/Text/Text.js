'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', ';\n  -webkit-font-smoothing: antialiased;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  text-transform: ', ';\n  ', ';\n'], ['\n  font-family: ', ';\n  -webkit-font-smoothing: antialiased;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  text-transform: ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      font-style: italic;\n    '], ['\n      font-style: italic;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledText = _styledComponents2.default.span(_templateObject, function (props) {
  return props.family === 'serif' ? '"PT Serif", Georgia, Serif' : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
}, _Matcher2.default.create('size', [['xmicro', '1rem'], ['micro', '1.2rem'], ['small', '1.4rem'], ['regular', '1.6rem'], ['large', '2.0rem'], ['display-small', '2.4rem'], ['display-medium', '3.2rem'], ['display-large', '4.0rem']]), _Matcher2.default.create('variant', [['regular', '400'], ['thick', '500'], ['medium', '600'], ['bold', '800']]), _Matcher2.default.create('color', [['regular', '#000000'], ['cyan', '#00a1b0'], ['gray', '#999999'], ['red', '#f44336'], ['green', '#4CAF50'], ['blue', '#2196F3'], ['orange', '#FF9800'], ['white', '#FFFFFF'], ['blue', '#2196F3']]), _Matcher2.default.create('textTransform', [['capitalize', 'capitalize'], ['uppercase', 'uppercase'], ['lowercase', 'lowercase']]), function (props) {
  return props.italic && (0, _styledComponents.css)(_templateObject2);
});

var Text = function Text(props) {
  return _react2.default.createElement(
    StyledText,
    {
      className: props.className,
      size: props.size,
      variant: props.variant,
      color: props.color,
      italic: props.italic,
      textTransform: props.textTransform,
      family: props.family },
    props.children
  );
};

Text.defaultProps = {
  size: 'regular',
  variant: 'regular',
  color: 'regular',
  family: 'default'
};

exports.default = Text;