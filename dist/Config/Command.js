"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ResetCron = _interopRequireDefault(require("../Command/ResetCron"));

/**
 * @class Cron
 */
var Command = /*#__PURE__*/function () {
  function Command() {
    (0, _classCallCheck2["default"])(this, Command);
  }

  (0, _createClass2["default"])(Command, null, [{
    key: "register",
    value:
    /**
     * Register crons class here, using class or container key
     * @return {[]}
     */
    function register() {
      return [_ResetCron["default"]];
    }
  }]);
  return Command;
}();

var _default = Command;
exports["default"] = _default;