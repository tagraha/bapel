'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  padding: 0.4rem;\n'], ['\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  padding: 0.4rem;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 1.6rem;\n  height: 1.6rem;\n  border: solid 0.1rem #808080;\n  padding: 0.2rem;\n  background-color: #fff;\n  border-radius: 50%;\n'], ['\n  width: 1.6rem;\n  height: 1.6rem;\n  border: solid 0.1rem #808080;\n  padding: 0.2rem;\n  background-color: #fff;\n  border-radius: 50%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  transition: 0.2s;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n'], ['\n  transition: 0.2s;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  opacity: 0;\n  position: absolute;\n  &:checked ~ div > div {\n    background: #4caf50;\n    transition: 0.2s;\n  }\n'], ['\n  opacity: 0;\n  position: absolute;\n  &:checked ~ div > div {\n    background: #4caf50;\n    transition: 0.2s;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioWrapper = _styledComponents2.default.div(_templateObject);

var RadioControl = _styledComponents2.default.div(_templateObject2);

var RadioCheck = _styledComponents2.default.div(_templateObject3);

var RadioInput = _styledComponents2.default.input(_templateObject4);
var Radio = function Radio(props) {
  return _react2.default.createElement(
    RadioWrapper,
    null,
    _react2.default.createElement(RadioInput, { type: 'radio', name: props.name }),
    _react2.default.createElement(
      RadioControl,
      null,
      _react2.default.createElement(RadioCheck, null)
    )
  );
};

exports.default = Radio;