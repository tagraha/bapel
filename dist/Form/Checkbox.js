'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  padding: 0.4rem;\n'], ['\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  padding: 0.4rem;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 1.6rem;\n  height: 1.6rem;\n  border: solid 0.1rem #a3a3a3;\n  border-radius: 0.2rem;\n  padding: 0.2rem;\n  background-color: #fff;\n'], ['\n  width: 1.6rem;\n  height: 1.6rem;\n  border: solid 0.1rem #a3a3a3;\n  border-radius: 0.2rem;\n  padding: 0.2rem;\n  background-color: #fff;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  opacity: 0;\n  position: absolute;\n\n  &:checked ~ div > div {\n    background: #4caf50;\n    transition: 0.2s;\n  }\n'], ['\n  opacity: 0;\n  position: absolute;\n\n  &:checked ~ div > div {\n    background: #4caf50;\n    transition: 0.2s;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 1rem;\n  height: 1rem;\n'], ['\n  width: 1rem;\n  height: 1rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxWrapper = _styledComponents2.default.div(_templateObject);

var CheckboxControl = _styledComponents2.default.div(_templateObject2);

var CheckboxInput = _styledComponents2.default.input(_templateObject3);

var CheckboxCheck = _styledComponents2.default.div(_templateObject4);

var Checkbox = function Checkbox(props) {
  return _react2.default.createElement(
    CheckboxWrapper,
    null,
    _react2.default.createElement(CheckboxInput, { type: 'checkbox', name: props.name }),
    _react2.default.createElement(
      CheckboxControl,
      null,
      _react2.default.createElement(CheckboxCheck, null)
    )
  );
};

exports.default = Checkbox;