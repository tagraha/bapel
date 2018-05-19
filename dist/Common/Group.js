'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: table;\n'], ['\n  display: table;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: table-cell;\n  vertical-align: middle;\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupWrapper = _styledComponents2.default.div(_templateObject);

var GroupContentWrapper = _styledComponents2.default.div(_templateObject2);

var Group = function Group(props) {
  return _react2.default.createElement(
    GroupWrapper,
    null,
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.createElement(
        GroupContentWrapper,
        null,
        child
      );
    })
  );
};

exports.default = Group;