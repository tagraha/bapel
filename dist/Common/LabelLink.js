'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: inherit;\n  cursor: pointer;\n  text-decoration: none !important;\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.08);\n'], ['\n  color: inherit;\n  cursor: pointer;\n  text-decoration: none !important;\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.08);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Provider = require('../Provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelLink = function LabelLink(props) {
  return _react2.default.createElement(
    _Provider.UikitConsumer,
    null,
    function (_ref) {
      var Link = _ref.Link;
      return _react2.default.createElement(Link, props);
    }
  );
};

exports.default = (0, _styledComponents2.default)(LabelLink)(_templateObject);