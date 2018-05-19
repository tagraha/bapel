'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 2.4rem;\n  height: 2.4rem;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 99;\n  border-radius: 50%;\n  overflow: hidden;\n  border: solid 0.2rem #fff;\n  background: #fff;\n  img,\n  svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n'], ['\n  width: 2.4rem;\n  height: 2.4rem;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 99;\n  border-radius: 50%;\n  overflow: hidden;\n  border: solid 0.2rem #fff;\n  background: #fff;\n  img,\n  svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeContainer = _styledComponents2.default.span(_templateObject);

var AvatarBadge = function AvatarBadge(props) {
  var src = props.src,
      children = props.children;

  return _react2.default.createElement(
    BadgeContainer,
    null,
    children || _react2.default.createElement('img', { src: src, alt: '' })
  );
};

exports.default = AvatarBadge;