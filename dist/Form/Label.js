'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 700;\n  margin: 0 0 0.4rem;\n  display: block;\n'], ['\n  font-weight: 700;\n  margin: 0 0 0.4rem;\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelWrapper = _styledComponents2.default.label(_templateObject);

var Label = function Label(props) {
  return _react2.default.createElement(
    LabelWrapper,
    null,
    props.children
  );
};

exports.default = Label;