"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _Method = _interopRequireDefault(require("./Method"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _methods = /*#__PURE__*/new WeakMap();

/**
 * @class Container
 */
var RouteCollector = /*#__PURE__*/function () {
  /**
   *
   */
  function RouteCollector() {
    (0, _classCallCheck2["default"])(this, RouteCollector);

    _classPrivateFieldInitSpec(this, _methods, {
      writable: true,
      value: []
    });
  }
  /**
   * Get instance
   * @return {RouteCollector}
   */


  (0, _createClass2["default"])(RouteCollector, [{
    key: "addMethod",
    value:
    /**
     *
     * @param {Method} method
     */
    function addMethod(method) {
      (0, _classPrivateFieldGet2["default"])(this, _methods).push(method);
    }
    /**
     *
     * @return {string}
     */

  }, {
    key: "getMethods",
    value: function getMethods() {
      return (0, _classPrivateFieldGet2["default"])(this, _methods);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(this, RouteCollector, _instance) == null) {
        _classStaticPrivateFieldSpecSet(this, RouteCollector, _instance, new this());
      }

      return _classStaticPrivateFieldSpecGet(this, RouteCollector, _instance);
    }
  }]);
  return RouteCollector;
}();

var _instance = {
  writable: true,
  value: void 0
};
var _default = RouteCollector;
exports["default"] = _default;