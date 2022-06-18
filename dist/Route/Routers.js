"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _express = require("express");

var _Controller = _interopRequireDefault(require("../Controller/Controller"));

var _MiddlewareCallback = _interopRequireDefault(require("../Middleware/MiddlewareCallback"));

var _ControllerCallback = _interopRequireDefault(require("../Controller/ControllerCallback"));

var _RouteCollector = _interopRequireDefault(require("./RouteCollector"));

var _Method = _interopRequireDefault(require("./Method"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _router = /*#__PURE__*/new WeakMap();

var _route = /*#__PURE__*/new WeakMap();

/**
 * @class Router
 */
var Routers = /*#__PURE__*/function () {
  /**
    *
    * @param {Express} app
    */
  function Routers() {
    (0, _classCallCheck2["default"])(this, Routers);

    _classPrivateFieldInitSpec(this, _router, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _route, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])(this, _router, (0, _express.Router)());
  }
  /**
    *
    * @param {string} route
    * @param {Function} callback
    */


  (0, _createClass2["default"])(Routers, [{
    key: "group",
    value: function group(route, callback) {
      var instance = new Routers();

      if ((0, _classPrivateFieldGet2["default"])(this, _route) != null) {
        (0, _classPrivateFieldSet2["default"])(instance, _route, "".concat((0, _classPrivateFieldGet2["default"])(this, _route)).concat(route));
      } else {
        (0, _classPrivateFieldSet2["default"])(instance, _route, "".concat(route));
      }

      (0, _classPrivateFieldGet2["default"])(this, _router).use((0, _classPrivateFieldGet2["default"])(instance, _router));
      callback(instance);
    }
    /**
      *
      * @param {string} route
      * @param {string} controller
      * @param {{}} additionalData
      * @return {Method}
      */

  }, {
    key: "delete",
    value: function _delete(route, controller) {
      var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.doRoute(route, controller, additionalData, 'DELETE');
    }
    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Method}
      */

  }, {
    key: "put",
    value: function put(route, controller) {
      var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.doRoute(route, controller, additionalData, 'PUT');
    }
    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Method}
      */

  }, {
    key: "post",
    value: function post(route, controller) {
      var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.doRoute(route, controller, additionalData, 'POST');
    }
    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Method}
      */

  }, {
    key: "get",
    value: function get(route, controller) {
      var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.doRoute(route, controller, additionalData, 'GET');
    }
    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @param {string} method
      * @return {Method}
      */

  }, {
    key: "doRoute",
    value: function doRoute(route, controller) {
      var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
      var currentRoute = route;

      if ((0, _classPrivateFieldGet2["default"])(this, _route) != null) {
        currentRoute = "".concat((0, _classPrivateFieldGet2["default"])(this, _route)).concat(route);
      }

      var routerCollector = _RouteCollector["default"].getInstance();

      var methodInstance = new _Method["default"](method.toUpperCase(), currentRoute, controller, additionalData);
      routerCollector.addMethod(methodInstance);
      return methodInstance;
    }
    /**
      *
      * @return {Routers}
      */

  }, {
    key: "getRouter",
    value: function getRouter() {
      var routerCollector = _RouteCollector["default"].getInstance();

      var _iterator = _createForOfIteratorHelper(routerCollector.getMethods()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var method = _step.value;
          var controller = method.getController();
          var additionalData = method.getAdditionalData();

          var resReq = _ControllerCallback["default"].call(controller, additionalData, method.getAfterMiddlewares());

          var currentRoute = method.getRoute();
          var beforeMiddlewares = method.getBeforeMiddlewares().map(function (e, i) {
            return _MiddlewareCallback["default"].callBefore(e);
          });

          if (method.getMethod() == 'GET') {
            (0, _classPrivateFieldGet2["default"])(this, _router).get("".concat(currentRoute), beforeMiddlewares, resReq);
          }

          if (method.getMethod() == 'POST') {
            (0, _classPrivateFieldGet2["default"])(this, _router).post("".concat(currentRoute), beforeMiddlewares, resReq);
          }

          if (method.getMethod() == 'PUT') {
            (0, _classPrivateFieldGet2["default"])(this, _router).put("".concat(currentRoute), beforeMiddlewares, resReq);
          }

          if (method.getMethod() == 'DELETE') {
            (0, _classPrivateFieldGet2["default"])(this, _router)["delete"]("".concat(currentRoute), beforeMiddlewares, resReq);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return (0, _classPrivateFieldGet2["default"])(this, _router);
    }
  }]);
  return Routers;
}();

var _default = Routers;
exports["default"] = _default;