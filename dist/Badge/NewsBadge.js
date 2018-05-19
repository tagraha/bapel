'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 99;\n  text-transform: uppercase;\n  line-height: 1.8rem;\n  padding: 0 0.8rem;\n  border-radius: 5rem;\n  opacity: 0.4;\n  font-size: 1rem;\n  background-color: ', ';\n'], ['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 99;\n  text-transform: uppercase;\n  line-height: 1.8rem;\n  padding: 0 0.8rem;\n  border-radius: 5rem;\n  opacity: 0.4;\n  font-size: 1rem;\n  background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroBadgeWrapper = _styledComponents2.default.div(_templateObject, _Matcher2.default.create('color', [['regular', '#000000'], ['cyan', '#00a1b0'], ['gray', '#999999'], ['red', '#f44336'], ['green', '#4CAF50'], ['blue', '#2196F3'], ['orange', '#FF9800'], ['white', '#FFFFFF'], ['purple', '#673AB7']]));

var HeroBadge = function HeroBadge(props) {
  return _react2.default.createElement(
    HeroBadgeWrapper,
    { color: props.color },
    props.children
  );
};

HeroBadgeWrapper.defaultProps = {
  color: 'regular'
};

exports.default = HeroBadge;