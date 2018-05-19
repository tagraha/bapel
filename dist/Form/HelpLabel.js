'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1.2rem;\n  color: ', ';\n  margin: 0.4rem 0 0;\n  display: block;\n'], ['\n  font-size: 1.2rem;\n  color: ', ';\n  margin: 0.4rem 0 0;\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelpLabelWrapper = _styledComponents2.default.span(_templateObject, function (props) {
  return props.error ? '#f44336' : '#999';
});

var HelpLabel = function HelpLabel(props) {
  return _react2.default.createElement(
    HelpLabelWrapper,
    props,
    props.children
  );
};

exports.default = HelpLabel;