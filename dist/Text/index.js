'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextPlaceholder = exports.TextBox = undefined;

var _TextBox = require('./TextBox');

Object.defineProperty(exports, 'TextBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextBox).default;
  }
});

var _TextPlaceholder = require('./TextPlaceholder');

Object.defineProperty(exports, 'TextPlaceholder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextPlaceholder).default;
  }
});

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Text2.default;