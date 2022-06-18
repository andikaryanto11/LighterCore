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

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../../../config"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _path = /*#__PURE__*/new WeakMap();

/**
 * @class FileLoader
 */
var FileLoader = /*#__PURE__*/function () {
  /**
   *
   * @param {string} path
   */
  function FileLoader(path) {
    (0, _classCallCheck2["default"])(this, FileLoader);

    _classPrivateFieldInitSpec(this, _path, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])(this, _path, _config["default"].sourcePath + '/' + path);
  }
  /**
   * Get data as object
   * @return {{}}
   */


  (0, _createClass2["default"])(FileLoader, [{
    key: "getData",
    value: function getData() {
      var rawdata = _fs["default"].readFileSync((0, _classPrivateFieldGet2["default"])(this, _path));

      var json = JSON.parse(rawdata);
      return json;
    }
  }]);
  return FileLoader;
}();

var _default = FileLoader;
exports["default"] = _default;