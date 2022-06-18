"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * @class Redirect
 */
var Redirect = /*#__PURE__*/function () {
  /**
   *
   */
  function Redirect() {
    (0, _classCallCheck2["default"])(this, Redirect);
    (0, _defineProperty2["default"])(this, "route", '');
    (0, _defineProperty2["default"])(this, "data", {});
  }
  /**
    *
    * @return {Redirect}
    */


  (0, _createClass2["default"])(Redirect, [{
    key: "with",
    value:
    /**
      *
      * @param {{}} data
      * @return {Redirect}
      */
    function _with(data) {
      this.data = data;
      return this;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(this, Redirect, _instance) == null) {
        _classStaticPrivateFieldSpecSet(this, Redirect, _instance, new this());
      }

      return _classStaticPrivateFieldSpecGet(this, Redirect, _instance);
    }
    /**
      *
      * @param {string} route
      * @return {Redirect}
      */

  }, {
    key: "to",
    value: function to(route) {
      var instance = Redirect.getInstance();
      instance.route = route;
      return instance;
    }
  }]);
  return Redirect;
}();

var _instance = {
  writable: true,
  value: null
};
var _default = Redirect;
exports["default"] = _default;