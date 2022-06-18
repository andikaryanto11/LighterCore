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
 * @class ResponseData
 */
var ResponseData = /*#__PURE__*/function () {
  /**
   *
   */
  function ResponseData() {
    (0, _classCallCheck2["default"])(this, ResponseData);
    (0, _defineProperty2["default"])(this, "code", 200);
    (0, _defineProperty2["default"])(this, "data", {});
  }
  /**
    *
    * @return {ResponseData}
    */


  (0, _createClass2["default"])(ResponseData, [{
    key: "json",
    value:
    /**
      *
      * @param {{}} data
      * @return {ResponseData}
      */
    function json(data) {
      this.data = data;
      return this;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(this, ResponseData, _instance) == null) {
        _classStaticPrivateFieldSpecSet(this, ResponseData, _instance, new this());
      }

      return _classStaticPrivateFieldSpecGet(this, ResponseData, _instance);
    }
    /**
      *
      * @param {number} code
      * @return {ResponseData}
      */

  }, {
    key: "status",
    value: function status(code) {
      var instance = ResponseData.getInstance();
      instance.code = code;
      return instance;
    }
  }]);
  return ResponseData;
}();

var _instance = {
  writable: true,
  value: null
};
var _default = ResponseData;
exports["default"] = _default;