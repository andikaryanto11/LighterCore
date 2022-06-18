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

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _item = /*#__PURE__*/new WeakMap();

/**
 * @class UploadedFile
 */
var UploadedFile = /*#__PURE__*/function () {
  /**
   *
   * @param {{}} item
   */
  function UploadedFile(item) {
    (0, _classCallCheck2["default"])(this, UploadedFile);

    _classPrivateFieldInitSpec(this, _item, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])(this, _item, item);
  }
  /**
   * Get item
   * @return {{}}
   */


  (0, _createClass2["default"])(UploadedFile, [{
    key: "getItem",
    value: function getItem() {
      return (0, _classPrivateFieldGet2["default"])(this, _item);
    }
    /**
     * Get Item name
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return (0, _classPrivateFieldGet2["default"])(this, _item).name;
    }
    /**
     * Get item extension
     *
     * @return {string}
     */

  }, {
    key: "getExtension",
    value: function getExtension() {
      return this.getName().split('.')[1];
    }
    /**
     * Get item size
     * @return {number}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return (0, _classPrivateFieldGet2["default"])(this, _item).size;
    }
    /**
     * Get Item mimetype
     * @return {string}
     */

  }, {
    key: "getMimeType",
    value: function getMimeType() {
      return (0, _classPrivateFieldGet2["default"])(this, _item).mimetype;
    }
    /**
     * Upload file to specific path
     *
     * @param {string} uploadPath
     * @param {Function} callback
     * @return {void}
     */

  }, {
    key: "move",
    value: function move(uploadPath, callback) {
      return (0, _classPrivateFieldGet2["default"])(this, _item).mv(uploadPath, callback);
    }
  }]);
  return UploadedFile;
}();

var _default = UploadedFile;
exports["default"] = _default;