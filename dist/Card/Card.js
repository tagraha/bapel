'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 33%;\n'], ['\n  max-width: 33%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  max-width: 500px;\n  max-height: 261px;\n'], ['\n  width: 100%;\n  max-width: 500px;\n  max-height: 261px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1em 0 .5em 0;\n'], ['\n  padding: 1em 0 .5em 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: #000;\n  font-size: 1.2em;\n\n  &:hover {\n    color: #8e8e8e;\n    text-decoration: none;\n  }\n'], ['\n  color: #000;\n  font-size: 1.2em;\n\n  &:hover {\n    color: #8e8e8e;\n    text-decoration: none;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: .75em;\n  color: #b2b3bb;\n'], ['\n  font-size: .75em;\n  color: #b2b3bb;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardWrapper = _styledComponents2.default.div(_templateObject);

var CardImage = _styledComponents2.default.img(_templateObject2);

var CardTitleWrapper = _styledComponents2.default.div(_templateObject3);

var CardTitle = _styledComponents2.default.a(_templateObject4);

var CardContent = _styledComponents2.default.p(_templateObject5);

var Card = function Card() {
  return _react2.default.createElement(
    CardWrapper,
    null,
    _react2.default.createElement(CardImage, { src: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg' }),
    _react2.default.createElement(
      CardTitleWrapper,
      null,
      _react2.default.createElement(
        CardTitle,
        { href: 'javascript:void(0)' },
        'any kind of long text of title would be great. hehehe, yolo bro'
      )
    ),
    _react2.default.createElement(
      CardContent,
      null,
      '5m ago by Tirta'
    )
  );
};

exports.default = Card;