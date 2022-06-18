"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class PlainObject
 */
var PlainObject = /*#__PURE__*/function () {
  function PlainObject() {
    (0, _classCallCheck2["default"])(this, PlainObject);
  }

  (0, _createClass2["default"])(PlainObject, null, [{
    key: "isEmpty",
    value:
    /**
      * Check plain object is empty
      * @param {{}} object
      * @return {boolean}
      */
    function isEmpty() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(object).length === 0;
    }
  }]);
  return PlainObject;
}();

var _default = PlainObject;
exports["default"] = _default;