"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodeDependencyInjection = require("node-dependency-injection");

var _Container = _interopRequireDefault(require("../../App/Config/Container"));

var _Container2 = _interopRequireDefault(require("./Container.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class ContainerLoader
 */
var ContainerLoader = /*#__PURE__*/function () {
  function ContainerLoader() {
    (0, _classCallCheck2["default"])(this, ContainerLoader);
  }

  (0, _createClass2["default"])(ContainerLoader, null, [{
    key: "load",
    value:
    /**
     *
     * @return {CoreContainer}
     */
    function load() {
      var containerBuilder = new _nodeDependencyInjection.ContainerBuilder();

      var _iterator = _createForOfIteratorHelper(_Container["default"].service),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var service = _step.value;
          service(containerBuilder);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _Container2["default"].getInstance().setContainerBuilder(containerBuilder);
    }
  }]);
  return ContainerLoader;
}();

var _default = ContainerLoader;
exports["default"] = _default;