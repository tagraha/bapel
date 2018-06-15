'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 33%;\n  outline: none !important;\n'], ['\n  max-width: 33%;\n  outline: none !important;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  max-width: 500px;\n  max-height: 261px;\n'], ['\n  width: 100%;\n  max-width: 500px;\n  max-height: 261px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1em 0 .5em 0;\n  text-decoration: none !important;\n'], ['\n  padding: 1em 0 .5em 0;\n  text-decoration: none !important;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: #000;\n  font-size: 1.2em;\n\n  &:hover {\n    color: #8e8e8e;\n    text-decoration: none;\n  }\n'], ['\n  color: #000;\n  font-size: 1.2em;\n\n  &:hover {\n    color: #8e8e8e;\n    text-decoration: none;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: .75em;\n  color: #b2b3bb;\n'], ['\n  font-size: .75em;\n  color: #b2b3bb;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var cardImage = props.cardImage,
      cardCaption = props.cardCaption,
      linkDestination = props.linkDestination,
      external = props.external,
      isReactRouter = props.isReactRouter;


  return _react2.default.createElement(
    CardWrapper,
    null,
    _react2.default.createElement(CardImage, { src: cardImage }),
    _react2.default.createElement(
      CardTitleWrapper,
      null,
      cardCaption && !isReactRouter && _react2.default.createElement(
        CardTitle,
        {
          href: linkDestination || "javascript:void(0)",
          target: external ? '_blank' : '_parent',
          rel: 'noopener noreferrer'
        },
        cardCaption
      ),
      isReactRouter && _react2.default.createElement(
        LinkRouter,
        {
          to: linkDestination
        },
        cardCaption
      )
    ),
    _react2.default.createElement(
      CardContent,
      null,
      '5m ago by Tirta'
    )
  );
};

Card.defaultProps = {
  cardImage: 'https://picsum.photos/500/300',
  cardCaption: 'default caption',
  linkDestination: 'https://google.com',
  external: true,
  isReactRouter: false
};

var CardWrapper = _styledComponents2.default.div(_templateObject);

var CardImage = _styledComponents2.default.img(_templateObject2);

var CardTitleWrapper = _styledComponents2.default.div(_templateObject3);

var CardTitle = _styledComponents2.default.a(_templateObject4);

var CardContent = _styledComponents2.default.p(_templateObject5);

var LinkRouter = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject4);

exports.default = Card;