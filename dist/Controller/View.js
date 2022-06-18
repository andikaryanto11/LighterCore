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
 * @class View
 */
var View = /*#__PURE__*/function () {
  /**
   *
   */
  function View() {
    (0, _classCallCheck2["default"])(this, View);
    (0, _defineProperty2["default"])(this, "view", '');
    (0, _defineProperty2["default"])(this, "data", {});
    (0, _defineProperty2["default"])(this, "type", 'view');
  }
  /**
    *
    * @return {View}
    */


  (0, _createClass2["default"])(View, [{
    key: "data",
    value:
    /**
      * Send data
      * @param {{}} data
      * @return {View}
      */
    function data(_data) {
      this.data = _data;
      return this;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(this, View, _instance) == null) {
        _classStaticPrivateFieldSpecSet(this, View, _instance, new this());
      }

      return _classStaticPrivateFieldSpecGet(this, View, _instance);
    }
    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */

  }, {
    key: "make",
    value: function make(view, data) {
      var instance = View.getInstance();
      instance.view = view;
      instance.data = data;
      instance.type = 'view';
      return instance;
    }
    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */

  }, {
    key: "html",
    value: function html(view, data) {
      var instance = View.getInstance();
      instance.view = view;
      instance.data = data;
      instance.type = 'html';
      return instance;
    }
    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */

  }, {
    key: "sendFile",
    value: function sendFile(view, data) {
      var instance = View.getInstance();
      instance.view = view;
      instance.data = data;
      instance.type = 'sendFile';
      return instance;
    }
  }]);
  return View;
}();

var _instance = {
  writable: true,
  value: null
};
var _default = View;
exports["default"] = _default;