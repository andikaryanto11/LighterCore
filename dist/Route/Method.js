"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _beforeMiddlewares = /*#__PURE__*/new WeakMap();

var _afterMiddlewares = /*#__PURE__*/new WeakMap();

var _method = /*#__PURE__*/new WeakMap();

var _route = /*#__PURE__*/new WeakMap();

var _controller = /*#__PURE__*/new WeakMap();

var _additionalData = /*#__PURE__*/new WeakMap();

/**
 * @class Method
 */
var Method = /*#__PURE__*/function () {
  /**
   *
   * @param {string} method
   * @param {string} route
   * @param {string} controller
   * @param {{}} additionalData
   */
  function Method(method, route, controller, additionalData) {
    (0, _classCallCheck2["default"])(this, Method);

    _classPrivateFieldInitSpec(this, _beforeMiddlewares, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _afterMiddlewares, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _method, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _route, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _controller, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _additionalData, {
      writable: true,
      value: {}
    });

    (0, _classPrivateFieldSet2["default"])(this, _method, method);
    (0, _classPrivateFieldSet2["default"])(this, _route, route);
    (0, _classPrivateFieldSet2["default"])(this, _controller, controller);
    (0, _classPrivateFieldSet2["default"])(this, _additionalData, additionalData);
  }
  /**
   *
   * @return {string}
   */


  (0, _createClass2["default"])(Method, [{
    key: "getAdditionalData",
    value: function getAdditionalData() {
      return (0, _classPrivateFieldGet2["default"])(this, _additionalData);
    }
    /**
     *
     * @return {string}
     */

  }, {
    key: "getController",
    value: function getController() {
      return (0, _classPrivateFieldGet2["default"])(this, _controller);
    }
    /**
     *
     * @return {string}
     */

  }, {
    key: "getRoute",
    value: function getRoute() {
      return (0, _classPrivateFieldGet2["default"])(this, _route);
    }
    /**
     *
     * @return {string}
     */

  }, {
    key: "getMethod",
    value: function getMethod() {
      return (0, _classPrivateFieldGet2["default"])(this, _method);
    }
    /**
     *
     * @param {string} middleware
     * @return {Method}
     */

  }, {
    key: "before",
    value: function before(middleware) {
      (0, _classPrivateFieldSet2["default"])(this, _beforeMiddlewares, [].concat((0, _toConsumableArray2["default"])((0, _classPrivateFieldGet2["default"])(this, _beforeMiddlewares)), [middleware]));
      return this;
    }
    /**
     *
     * @param {string} middleware
     * @return {Method}
     */

  }, {
    key: "after",
    value: function after(middleware) {
      (0, _classPrivateFieldSet2["default"])(this, _afterMiddlewares, [].concat((0, _toConsumableArray2["default"])((0, _classPrivateFieldGet2["default"])(this, _afterMiddlewares)), [middleware]));
      return this;
    }
    /**
     *
     * @return {string[]}
     */

  }, {
    key: "getBeforeMiddlewares",
    value: function getBeforeMiddlewares() {
      return (0, _classPrivateFieldGet2["default"])(this, _beforeMiddlewares);
    }
    /**
     *
     * @return {string[]}
     */

  }, {
    key: "getAfterMiddlewares",
    value: function getAfterMiddlewares() {
      return (0, _classPrivateFieldGet2["default"])(this, _afterMiddlewares);
    }
  }]);
  return Method;
}();

var _default = Method;
exports["default"] = _default;