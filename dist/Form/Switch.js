'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n\n  &:checked ~ div > div {\n    left: 1.6rem;\n  }\n\n  :checked ~ div {\n    background: #4caf50;\n  }\n'], ['\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n\n  &:checked ~ div > div {\n    left: 1.6rem;\n  }\n\n  :checked ~ div {\n    background: #4caf50;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: block;\n  height: 2rem;\n  width: 4rem;\n  background: #cccccc;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0.2rem 0;\n  box-shadow: 0 0.1rem rgba(0, 0, 0, 0.08) inset;\n'], ['\n  position: relative;\n  display: block;\n  height: 2rem;\n  width: 4rem;\n  background: #cccccc;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0.2rem 0;\n  box-shadow: 0 0.1rem rgba(0, 0, 0, 0.08) inset;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  left: 0;\n  top: -0.2rem;\n  display: block;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.65),\n    0 0.3rem 0.3rem rgba(0, 0, 0, 0.08);\n  content: \'\';\n  transition: all 0.3s ease;\n'], ['\n  position: absolute;\n  left: 0;\n  top: -0.2rem;\n  display: block;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.65),\n    0 0.3rem 0.3rem rgba(0, 0, 0, 0.08);\n  content: \'\';\n  transition: all 0.3s ease;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchWrapper = _styledComponents2.default.div(_templateObject);

var SwitchInput = _styledComponents2.default.input(_templateObject2);

var SwitchInner = _styledComponents2.default.div(_templateObject3);

var SwitchButton = _styledComponents2.default.div(_templateObject4);

var Switch = function Switch() {
  return _react2.default.createElement(
    SwitchWrapper,
    null,
    _react2.default.createElement(SwitchInput, { type: 'checkbox' }),
    _react2.default.createElement(
      SwitchInner,
      null,
      _react2.default.createElement(SwitchButton, null)
    )
  );
};

exports.default = Switch;