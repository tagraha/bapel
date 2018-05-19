'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = exports.TableRow = exports.TableColumn = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: table;\n\n  ', ';\n'], ['\n  display: table;\n\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: table-cell;\n  vertical-align: ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  display: table-cell;\n  vertical-align: ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      position: relative;\n    '], ['\n      position: relative;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  overflow: hidden;\n  ', ';\n'], ['\n  overflow: hidden;\n  ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      margin: 0 -0.8rem;\n    '], ['\n      margin: 0 -0.8rem;\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  ', ';\n  ', ';\n'], ['\n  float: left;\n  ', ';\n  ', ';\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      padding: 0 0.8rem;\n    '], ['\n      padding: 0 0.8rem;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeMatcher = _Matcher2.default.create('variant', [['wide', '100%'], ['half', '50%'], ['tierce', '33.3%'], ['quarter', '25%']]);

var TRow = _styledComponents2.default.div(_templateObject, function (props) {
  return props.variant === 'wide' && (0, _styledComponents.css)(_templateObject2, sizeMatcher);
});

var TableRow = function TableRow(props) {
  return _react2.default.createElement(
    TRow,
    { variant: props.variant },
    props.children
  );
};

TableRow.defaultProps = {
  variant: 'default'
};

var TColumn = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.verticalAlign;
}, function (props) {
  return props.relative && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.variant && (0, _styledComponents.css)(_templateObject2, sizeMatcher);
});

var TableColumn = function TableColumn(props) {
  return _react2.default.createElement(
    TColumn,
    {
      relative: props.relative,
      className: props.className,
      variant: props.variant,
      style: props.style,
      verticalAlign: props.verticalAlign },
    props.children
  );
};

TableColumn.defaultProps = {
  variant: 'default',
  relative: false,
  style: {},
  verticalAlign: 'middle'
};

var RowDiv = _styledComponents2.default.div(_templateObject5, function (props) {
  return !props.noMargin && (0, _styledComponents.css)(_templateObject6);
});

var ColumnDiv = _styledComponents2.default.div(_templateObject7, function (props) {
  return !props.noPadding && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.variant && (0, _styledComponents.css)(_templateObject2, sizeMatcher);
});

var Column = function Column(props) {
  return _react2.default.createElement(
    ColumnDiv,
    { noPadding: props.noPadding, variant: props.variant },
    props.children
  );
};

Column.defaultProps = {
  noPadding: false
};

var Row = function Row(props) {
  return _react2.default.createElement(
    RowDiv,
    { noMargin: props.noMargin },
    props.children
  );
};

Row.defaultProps = {
  noMargin: false
};

exports.default = Row;
exports.TableColumn = TableColumn;
exports.TableRow = TableRow;
exports.Row = Row;
exports.Column = Column;