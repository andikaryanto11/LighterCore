"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class StringLib
 */
var StringLib = /*#__PURE__*/function () {
  function StringLib() {
    (0, _classCallCheck2["default"])(this, StringLib);
  }

  (0, _createClass2["default"])(StringLib, null, [{
    key: "ucFirst",
    value:
    /**
      *
      * @param {string} value
      * @return {string}
      */
    function ucFirst(value) {
      if (typeof value !== 'string') {
        return '';
      }

      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }]);
  return StringLib;
}();

var _default = StringLib;
exports["default"] = _default;