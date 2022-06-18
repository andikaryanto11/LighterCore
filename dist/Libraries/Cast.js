"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class Cast
 */
var Cast = /*#__PURE__*/function () {
  function Cast() {
    (0, _classCallCheck2["default"])(this, Cast);
  }

  (0, _createClass2["default"])(Cast, null, [{
    key: "to",
    value:
    /**
     *
     * @param {any} value
     * @param {string} type
     * @return {any}
     */
    function to(value, type) {
      switch (type) {
        case 'boolean':
          return Boolean(value);
      }
    }
  }]);
  return Cast;
}();

var _default = Cast;
exports["default"] = _default;