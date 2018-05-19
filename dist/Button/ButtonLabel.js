'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  font-size: ', ';\n  padding: ', ';\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  font-size: ', ';\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonLabelStyleHandler = function buttonLabelStyleHandler(props) {
  var styles = {};
  switch (props.size) {
    case 'xsmall':
      styles.padding = '0rem 0.8rem';
      break;
    case 'small':
      styles.padding = '0.3rem 1.2rem';
      break;
    default:
      styles.padding = '0.7rem 1.2rem';
      break;
  }

  return styles;
};

var variantMatcher = _Matcher2.default.create('variant', [['primary', 'white'], ['line', 'cyan'], ['danger', 'red'], ['default', 'regular'], ['link', 'regular']]);

var sizeMatcher = _Matcher2.default.create('size', [['default', 'regular'], ['small', 'small'], ['xsmall', 'micro']]);

var fontSizeMatcher = _Matcher2.default.create('size', [['default', '1.6rem'], ['small', '1.4rem'], ['xsmall', '1.2rem']]);

var defaultTextProps = function defaultTextProps(props) {
  return {
    color: variantMatcher(props),
    size: sizeMatcher(props),
    variant: 'thick'
  };
};

var ButtonTextWrapper = _styledComponents2.default.span(_templateObject, fontSizeMatcher, function (props) {
  return buttonLabelStyleHandler(props).padding;
});

var ButtonLabel = function ButtonLabel(_ref) {
  var size = _ref.size,
      variant = _ref.variant,
      children = _ref.children;

  if (typeof children === 'string') {
    return _react2.default.createElement(
      ButtonTextWrapper,
      { size: size },
      _react2.default.createElement(
        _Text2.default,
        defaultTextProps({ size: size, variant: variant }),
        children
      )
    );
  }
  return _react2.default.createElement(
    ButtonTextWrapper,
    { size: size },
    children
  );
};

exports.default = ButtonLabel;