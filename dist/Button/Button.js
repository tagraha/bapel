'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  appearance: none;\n  user-select: none;\n  font-family: inherit;\n  padding: 0;\n  outline: 0;\n  transition: 0.2s;\n  line-height: 2.4rem;\n  text-decoration: none !important;\n  ', ' position: relative;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: ', ';\n  width: ', ';\n  background-color: ', ';\n  font-size: ', ';\n  color: ', ';\n  border: ', ';\n  border-bottom-color: ', ';\n  border-right: ', ';\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n  cursor: ', ';\n  opacity: ', ';\n  vertical-align: middle;\n'], ['\n  appearance: none;\n  user-select: none;\n  font-family: inherit;\n  padding: 0;\n  outline: 0;\n  transition: 0.2s;\n  line-height: 2.4rem;\n  text-decoration: none !important;\n  ', ' position: relative;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: ', ';\n  width: ', ';\n  background-color: ', ';\n  font-size: ', ';\n  color: ', ';\n  border: ', ';\n  border-bottom-color: ', ';\n  border-right: ', ';\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n  cursor: ', ';\n  opacity: ', ';\n  vertical-align: middle;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      background-image: linear-gradient(\n        180deg,\n        hsla(0, 0%, 100%, 0.1),\n        hsla(0, 0%, 100%, 0)\n      );\n    '], ['\n      background-image: linear-gradient(\n        180deg,\n        hsla(0, 0%, 100%, 0.1),\n        hsla(0, 0%, 100%, 0)\n      );\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: table;\n  width: 100%;\n'], ['\n  display: table;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ButtonLabel = require('./ButtonLabel');

var _ButtonLabel2 = _interopRequireDefault(_ButtonLabel);

var _ButtonIcon = require('./ButtonIcon');

var _ButtonIcon2 = _interopRequireDefault(_ButtonIcon);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyleHandler = function buttonStyleHandler(props) {
  var styles = {};

  styles.width = props.block || props.position ? '100%' : 'auto';
  styles.borderRadius = props.round ? '8rem' : '0.5rem';

  switch (props.variant) {
    case 'primary':
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#00a1b0';
      styles.mouseEventBackgroundColor = '#007c87';
      break;
    case 'line':
      styles.border = 'solid 0.1rem #00a1b0';
      styles.borderBottomColor = '#007c87';
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#fff';
      break;
    case 'danger':
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#f8f8f8';
      styles.mouseEventBackgroundColor = '#e4e4e4';
      break;
    case 'link':
      styles.border = '0';
      styles.backgroundColor = 'transparent';
      styles.mouseEventBackgroundColor = 'transparent';
      break;
    default:
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#d2d2d2';
  }

  switch (props.position) {
    case 'left':
      styles.borderRadius = '8rem 0 0 8rem';
      styles.borderRight = '0';
      break;
    case 'middle':
      styles.borderRadius = '0';
      styles.borderRight = '0';
      break;
    case 'right':
      styles.borderRadius = '0 8rem 8rem 0';
      break;
  }

  styles.cursor = props.disabled ? 'not-allowed' : 'pointer';
  styles.opacity = props.disabled ? '0.72' : '1';
  styles.mouseEventBackgroundColor = props.disabled ? styles.backgroundColor : styles.mouseEventBackgroundColor;

  return styles;
};

var ButtonWrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return props.variant !== 'link' && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return buttonStyleHandler(props).borderRadius;
}, function (props) {
  return buttonStyleHandler(props).width;
}, function (props) {
  return buttonStyleHandler(props).backgroundColor;
}, function (props) {
  return buttonStyleHandler(props).fontSize;
}, function (props) {
  return buttonStyleHandler(props).color;
}, function (props) {
  return buttonStyleHandler(props).border;
}, function (props) {
  return buttonStyleHandler(props).borderBottomColor;
}, function (props) {
  return buttonStyleHandler(props).borderRight;
}, function (props) {
  return buttonStyleHandler(props).mouseEventBackgroundColor;
}, function (props) {
  return buttonStyleHandler(props).color;
}, function (props) {
  return buttonStyleHandler(props).cursor;
}, function (props) {
  return buttonStyleHandler(props).opacity;
});

var ButtonContentContainer = _styledComponents2.default.span(_templateObject3);

var Button = function Button(props) {
  var size = props.size,
      variant = props.variant,
      icon = props.icon,
      iconPosition = props.iconPosition,
      round = props.round,
      block = props.block,
      disabled = props.disabled,
      children = props.children,
      notificationValue = props.notificationValue,
      defaultButtonProps = (0, _objectWithoutProperties3.default)(props, ['size', 'variant', 'icon', 'iconPosition', 'round', 'block', 'disabled', 'children', 'notificationValue']);

  return _react2.default.createElement(
    ButtonWrapper,
    (0, _extends3.default)({
      block: block,
      round: round,
      disabled: disabled,
      size: size,
      variant: variant
    }, defaultButtonProps),
    _react2.default.createElement(
      ButtonContentContainer,
      null,
      icon && (!iconPosition || iconPosition === 'left') && _react2.default.createElement(_ButtonIcon2.default, {
        notificationValue: notificationValue,
        size: size,
        icon: icon,
        position: children ? iconPosition ? iconPosition : 'left' : 'default'
      }),
      children && _react2.default.createElement(
        _ButtonLabel2.default,
        { size: size, variant: variant },
        children
      ),
      icon && iconPosition === 'right' && _react2.default.createElement(_ButtonIcon2.default, {
        notificationValue: notificationValue,
        size: size,
        icon: icon,
        position: iconPosition
      })
    )
  );
};

Button.defaultProps = {
  size: 'default',
  variant: 'default',
  round: false,
  block: false,
  disabled: false
};

exports.default = Button;