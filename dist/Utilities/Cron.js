"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class Cron
 */
var Cron = /*#__PURE__*/function () {
  function Cron() {
    (0, _classCallCheck2["default"])(this, Cron);
  }

  (0, _createClass2["default"])(Cron, [{
    key: "time",
    value:
    /**
     * Cron value
     * @return {string}
     */
    function time() {
      return '';
    }
    /**
     * Business logic that will be executed
     * @return {any}
     */

  }, {
    key: "execute",
    value: function execute() {
      return '';
    }
  }]);
  return Cron;
}();

var _default = Cron;
exports["default"] = _default;