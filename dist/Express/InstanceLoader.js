"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Container = _interopRequireDefault(require("../Container/Container"));

/**
 * @class InstanceLoader
 */
var InstanceLoader = /*#__PURE__*/function () {
  function InstanceLoader() {
    (0, _classCallCheck2["default"])(this, InstanceLoader);
  }

  (0, _createClass2["default"])(InstanceLoader, null, [{
    key: "load",
    value:
    /**
     *
     * @param {any} className
     * @return {any}
     */
    function load(className) {
      if (typeof className == 'string') {
        return _Container["default"].getInstance().get(className);
      }

      return new className();
    }
  }]);
  return InstanceLoader;
}();

var _default = InstanceLoader;
exports["default"] = _default;