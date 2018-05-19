'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  appearance: none;\n  line-height: 2.4rem;\n  border: 0;\n  font-family: inherit;\n  outline: 0;\n  background: none;\n  min-width: 12rem;\n  resize: vertical;\n  color: inherit;\n  width: 100%;\n  padding: ', ';\n  font-size: ', ';\n  min-height: ', ';\n'], ['\n  display: block;\n  appearance: none;\n  line-height: 2.4rem;\n  border: 0;\n  font-family: inherit;\n  outline: 0;\n  background: none;\n  min-width: 12rem;\n  resize: vertical;\n  color: inherit;\n  width: 100%;\n  padding: ', ';\n  font-size: ', ';\n  min-height: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  margin-top: -0.9rem;\n'], ['\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  margin-top: -0.9rem;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding-right: 3.3rem;\n'], ['\n  padding-right: 3.3rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _Display = require('../Display');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormControlWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size === 'small' ? '0.3rem 0.6rem' : '0.7rem 0.8rem';
}, function (props) {
  return props.size === 'small' ? '1.4rem' : '1.6rem';
}, function (props) {
  return props.size === 'small' ? '3rem' : '3.8rem';
});

var SelectDropDownWrapper = _styledComponents2.default.div(_templateObject2);

var InputForm = FormControlWrapper.withComponent('input');
var TextareaForm = FormControlWrapper.withComponent('textarea');
var SelectForm = FormControlWrapper.withComponent('select').extend(_templateObject3);

var FormControl = function FormControl(_ref) {
  var type = _ref.type,
      inputProps = _ref.inputProps,
      options = _ref.options,
      size = _ref.size;

  var InputableForm = InputForm;
  var inputAttrs = {};
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
    case 'tel':
      inputAttrs = { type: type };
      break;
    case 'date':
      inputAttrs = {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: false
      };
      break;
    case 'time':
      inputAttrs = {
        dateFormat: false,
        timeFormat: 'HH:mm'
      };
      break;
    case 'datetime':
      inputAttrs = {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm'
      };
      break;
    case 'select':
      InputableForm = SelectForm;
      break;
    case 'textarea':
      InputableForm = TextareaForm;
      break;
  }

  if (type === 'datetime' || type === 'date' || type === 'time') {
    return _react2.default.createElement(_reactDatetime2.default, (0, _extends3.default)({
      renderInput: function renderInput(props) {
        return _react2.default.createElement(InputableForm, (0, _extends3.default)({
          size: size,
          disabled: inputProps && inputProps.disabled,
          readonly: inputProps && inputProps.readonly,
          type: 'text'
        }, props));
      }
    }, inputProps, inputAttrs));
  }

  var props = (0, _extends3.default)({}, inputProps, inputAttrs, {
    size: size
  });

  if (type === 'select') {
    return _react2.default.createElement(
      _Display.TableRow,
      { variant: 'wide' },
      _react2.default.createElement(
        _Display.TableColumn,
        { verticalAlign: 'middle', style: { zIndex: 1 }, relative: true },
        _react2.default.createElement(
          InputableForm,
          props,
          _react2.default.createElement(
            'option',
            null,
            inputProps && inputProps.placeholder || 'Pilih'
          ),
          options && options.map(function (item) {
            return _react2.default.createElement(
              'option',
              { key: item.value, value: item.value },
              item.label
            );
          })
        )
      ),
      _react2.default.createElement(
        _Display.TableColumn,
        { verticalAlign: 'middle', relative: true },
        _react2.default.createElement(
          SelectDropDownWrapper,
          null,
          _react2.default.createElement(_Icon.Icons, { name: 'drop-down', size: 'small' })
        )
      )
    );
  }

  return _react2.default.createElement(InputableForm, props);
};

exports.default = FormControl;