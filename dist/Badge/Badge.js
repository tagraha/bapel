'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  -webkit-font-smoothing: antialiased;\n  display: table;\n  line-height: 2.4rem;\n  padding: 0 0.8rem;\n  border-radius: 10rem;\n  background: #000;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  background: ', ';\n'], ['\n  -webkit-font-smoothing: antialiased;\n  display: table;\n  line-height: 2.4rem;\n  padding: 0 0.8rem;\n  border-radius: 10rem;\n  background: #000;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  background: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledBadge = _styledComponents2.default.span(_templateObject, _Matcher2.default.create('background', [['red', '#db3737'], ['green', '#4CAF50'], ['blue', '#2196F3']]));

var Badge = function Badge(props) {
  return _react2.default.createElement(
    StyledBadge,
    props,
    props.children
  );
};

Badge.defaultProps = {
  background: 'green'
};

exports.default = Badge;