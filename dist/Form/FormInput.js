'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  border: ', ';\n  border-top-color: #c2c2c2;\n  border-radius: ', ';\n  background: #fff;\n  overflow: visible;\n  &:focus-within {\n    border-color: #137cbd;\n  }\n  ', ' ', ';\n  ', ';\n'], ['\n  display: block;\n  border: ', ';\n  border-top-color: #c2c2c2;\n  border-radius: ', ';\n  background: #fff;\n  overflow: visible;\n  &:focus-within {\n    border-color: #137cbd;\n  }\n  ', ' ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      border-right: none;\n    '], ['\n      border-right: none;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      border-color: #f44336 !important;\n    '], ['\n      border-color: #f44336 !important;\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      width: 100%;\n    '], ['\n      width: 100%;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  transition: 0.2s;\n  font-size: 1.6rem;\n  position: relative;\n  overflow: visible;\n'], ['\n  transition: 0.2s;\n  font-size: 1.6rem;\n  position: relative;\n  overflow: visible;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FormControl = require('./FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormAddon = require('./FormAddon');

var _FormAddon2 = _interopRequireDefault(_FormAddon);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Display = require('../Display');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.borderless ? 'none' : 'solid 0.1rem #d2d2d2';
}, function (props) {
  return props.group ? '0.2rem 0 0 0.2rem' : '0.2rem';
}, function (props) {
  return props.group && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.block && (0, _styledComponents.css)(_templateObject4);
});

var FormInputWrapper = _styledComponents2.default.div(_templateObject5);

var FormInput = function FormInput(props) {
  return _react2.default.createElement(
    FormInputContainer,
    props,
    _react2.default.createElement(
      FormInputWrapper,
      null,
      _react2.default.createElement(
        _Display.TableRow,
        { variant: 'wide' },
        props.addonLeft && _react2.default.createElement(
          _Display.TableColumn,
          { verticalAlign: 'middle' },
          _react2.default.createElement(
            _FormAddon2.default,
            { size: props.size },
            props.addonLeft
          )
        ),
        _react2.default.createElement(
          _Display.TableColumn,
          { verticalAlign: 'middle', variant: 'wide' },
          _react2.default.createElement(_FormControl2.default, props)
        ),
        props.addonRight && _react2.default.createElement(
          _Display.TableColumn,
          { verticalAlign: 'middle' },
          _react2.default.createElement(
            _FormAddon2.default,
            { size: props.size },
            props.addonRight
          )
        )
      )
    )
  );
};

FormInput.defaultProps = {
  size: 'default',
  block: false,
  group: false,
  error: false,
  borderless: false
};

exports.default = FormInput;