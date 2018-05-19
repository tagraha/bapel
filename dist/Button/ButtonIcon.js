'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: table-cell;\n  vertical-align: middle;\n  width: 1px;\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n  width: 1px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: block;\n  padding: ', ';\n'], ['\n  position: relative;\n  display: block;\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Badge = require('../Badge');

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonIconStyleHandler = function buttonIconStyleHandler(props) {
  var styles = {};
  var size = props.size;

  switch (size) {
    case 'xsmall':
      styles.padding = _Matcher2.default.create('position', [['default', '.3rem .4rem'], ['right', '0.3rem .4rem .3rem 0'], ['left', '0.3rem 0 .3rem .4rem']])(props);
      break;
    case 'small':
      styles.padding = _Matcher2.default.create('position', [['default', '.5rem .6rem'], ['right', '0.5rem .6rem .5rem 0'], ['left', '0.5rem 0 .5rem .6rem']])(props);
      break;
    default:
      styles.padding = _Matcher2.default.create('position', [['default', '.7rem .8rem'], ['right', '0.7rem .8rem .7rem 0'], ['left', '0.7rem 0 .7rem .8rem']])(props);
      break;
  }

  return styles;
};

var ButtonIconContainer = _styledComponents2.default.div(_templateObject);

var ButtonIconWrapper = _styledComponents2.default.span(_templateObject2, function (props) {
  return buttonIconStyleHandler(props).padding;
});

var ButtonIcon = function ButtonIcon(_ref) {
  var size = _ref.size,
      notificationValue = _ref.notificationValue,
      icon = _ref.icon,
      position = _ref.position;
  return _react2.default.createElement(
    ButtonIconContainer,
    null,
    _react2.default.createElement(
      ButtonIconWrapper,
      { size: size, position: position },
      _react2.default.cloneElement(icon, { size: size }),
      notificationValue !== null && typeof notificationValue !== 'undefined' && _react2.default.createElement(
        _Badge.NotificationBadge,
        null,
        notificationValue
      )
    )
  );
};

ButtonIcon.defaultProps = {
  position: 'default'
};

exports.default = ButtonIcon;