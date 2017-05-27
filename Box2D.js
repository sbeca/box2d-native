'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindings = require('bindings');

var _bindings2 = _interopRequireDefault(_bindings);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var box2d = (0, _bindings2.default)('Box2D.node'),
    regexp = new RegExp('^b2');

exports.default = (0, _lodash.reduce)(box2d, function (box2d, val, key) {
  return regexp.test(key) ? Object.assign(box2d, _defineProperty({}, key.replace(regexp, ''), val)) : box2d;
}, box2d);

module.exports = exports.default;

//# sourceMappingURL=Box2D.js.map