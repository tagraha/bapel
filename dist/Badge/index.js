'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsBadge = exports.AvatarBadge = exports.NotificationBadge = exports.NotificationDotBadge = undefined;

var _NotificationDotBadge = require('./NotificationDotBadge');

Object.defineProperty(exports, 'NotificationDotBadge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotificationDotBadge).default;
  }
});

var _NotificationBadge = require('./NotificationBadge');

Object.defineProperty(exports, 'NotificationBadge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotificationBadge).default;
  }
});

var _AvatarBadge = require('./AvatarBadge');

Object.defineProperty(exports, 'AvatarBadge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AvatarBadge).default;
  }
});

var _NewsBadge = require('./NewsBadge');

Object.defineProperty(exports, 'NewsBadge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NewsBadge).default;
  }
});

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Badge2.default;