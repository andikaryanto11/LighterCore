"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _nodeDependencyInjection = require("node-dependency-injection");

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * @class Container
 */
var Container = /*#__PURE__*/function () {
  /**
   *
   */
  function Container() {
    (0, _classCallCheck2["default"])(this, Container);
    (0, _defineProperty2["default"])(this, "containerBuilder", null);
  }
  /**
   * Get instance
   * @return {Container}
   */


  (0, _createClass2["default"])(Container, [{
    key: "setContainerBuilder",
    value:
    /**
     * Set conatiner builder
     * @param {ContainerBuilder} containerBuilder
     * @return {Container}
     */
    function setContainerBuilder(containerBuilder) {
      this.containerBuilder = containerBuilder;
      return this;
    }
    /**
     * Get service instance
     * @param {string} key
     * @return {*}
     */

  }, {
    key: "get",
    value: function get(key) {
      return this.containerBuilder.get(key);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(this, Container, _instance) == null) {
        _classStaticPrivateFieldSpecSet(this, Container, _instance, new this());
      }

      return _classStaticPrivateFieldSpecGet(this, Container, _instance);
    }
  }]);
  return Container;
}();

var _instance = {
  writable: true,
  value: void 0
};
var _default = Container;
exports["default"] = _default;