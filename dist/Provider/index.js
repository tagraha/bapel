'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UikitConsumer = exports.UikitProvider = exports.BapelUiKit = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactContext = require('create-react-context');

var _createReactContext2 = _interopRequireDefault(_createReactContext);

var _manifest = require('../../dist/public/manifest.json');

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BapelUiKit = exports.BapelUiKit = function BapelUiKit(publicPath, LinkComponent) {
  var _this = this;

  (0, _classCallCheck3.default)(this, BapelUiKit);

  this.getUrl = function (assetPath) {
    return '' + _this.publicPath + (_this.assetsMap.get(assetPath) || 'notfound');
  };

  this.publicPath = publicPath;
  this.Link = LinkComponent;
  this.assetsMap = new Map(Object.keys(_manifest2.default).map(function (asset) {
    return [asset, _manifest2.default[asset]];
  }));
};

var DefaultLink = function DefaultLink(props) {
  return _react2.default.createElement('a', props);
};

var UikitContext = (0, _createReactContext2.default)(new BapelUiKit('/', DefaultLink));

var UikitProvider = exports.UikitProvider = UikitContext.Provider;
var UikitConsumer = exports.UikitConsumer = UikitContext.Consumer;