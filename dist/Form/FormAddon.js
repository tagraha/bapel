'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: ', ';\n  white-space: nowrap;\n  color: #808080;\n  line-height: 2.4rem;\n'], ['\n  padding: ', ';\n  white-space: nowrap;\n  color: #808080;\n  line-height: 2.4rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormAddonWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size === 'small' ? '0.3rem 0.4rem' : '0.7rem 0.8rem';
});

var FormAddon = function FormAddon(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return _react2.default.createElement(
    FormAddonWrapper,
    { size: size },
    children
  );
};

exports.default = FormAddon;