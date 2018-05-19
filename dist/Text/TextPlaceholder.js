'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', ';\n  width: ', ';\n  display: inline-block;\n  margin: 0px auto;\n  background-color: #ccc;\n'], ['\n  font-size: ', ';\n  width: ', ';\n  display: inline-block;\n  margin: 0px auto;\n  background-color: #ccc;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextPlaceholderWrapper = _styledComponents2.default.div(_templateObject, _Matcher2.default.create('size', [['xmicro', '1rem'], ['micro', '1.2rem'], ['small', '1.4rem'], ['regular', '1.6rem'], ['large', '2.0rem'], ['display-small', '2.4rem'], ['display-medium', '3.2rem'], ['display-large', '4.0rem']]), _Matcher2.default.create('width', [['small', '20%'], ['medium', '40%'], ['large', '80%']]));

var TextPlaceholder = function TextPlaceholder(props) {
  return _react2.default.createElement(
    TextPlaceholderWrapper,
    { width: props.width, size: props.size },
    '\xA0'
  );
};

TextPlaceholder.defaultProps = {
  size: 'regular',
  width: 'large'
};

exports.default = TextPlaceholder;