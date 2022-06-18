"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CommonLib = _interopRequireDefault(require("../../App/Libraries/CommonLib"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * @class FileLoader
 */
var Jwt = /*#__PURE__*/function () {
  function Jwt() {
    (0, _classCallCheck2["default"])(this, Jwt);
  }

  (0, _createClass2["default"])(Jwt, [{
    key: "sign",
    value:
    /**
     * Create token
     * @param {any} payload
     * @return {string}
     */
    function sign(payload) {
      var token = _jsonwebtoken["default"].sign(payload, _CommonLib["default"].getKey());

      return token;
    }
    /**
     * Create token
     *
     * @param {string} token
     * @param {{}} option
     * @return {jwt.Jwt}
     */

  }, {
    key: "decode",
    value: function decode(token) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _jsonwebtoken["default"].decode(token, option);
    }
  }]);
  return Jwt;
}();

var _default = Jwt;
exports["default"] = _default;