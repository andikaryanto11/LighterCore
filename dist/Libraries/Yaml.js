"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _fs = _interopRequireDefault(require("fs"));

var _appRootPath = _interopRequireDefault(require("app-root-path"));

/**
 * @class Yaml
 */
var Yaml = /*#__PURE__*/function () {
  function Yaml() {
    (0, _classCallCheck2["default"])(this, Yaml);
  }

  (0, _createClass2["default"])(Yaml, null, [{
    key: "load",
    value:
    /**
     *
     * @param {string} path
     * @param {string} key
     * @return {{}}
     */
    function load(path) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var value = _jsYaml["default"].load(_fs["default"].readFileSync(_appRootPath["default"] + '/' + path + '.yml', 'utf8'));

      if (key != null) {
        return value[key];
      }

      return value;
    }
  }]);
  return Yaml;
}();

var _default = Yaml;
exports["default"] = _default;