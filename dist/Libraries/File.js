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

var _DateFormat = _interopRequireDefault(require("./DateFormat"));

var _UploadedFile = _interopRequireDefault(require("./UploadedFile"));

var _config = _interopRequireDefault(require("../../../config"));

var _UploadedFileError = _interopRequireDefault(require("../Errors/UploadedFileError.js"));

var _md = _interopRequireDefault(require("md5"));

var _uuid = require("uuid");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _files = /*#__PURE__*/new WeakMap();

var _destination = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var _allowedType = /*#__PURE__*/new WeakMap();

var _errorMessage = /*#__PURE__*/new WeakMap();

var _urlfile = /*#__PURE__*/new WeakMap();

/**
 * @class File
 */
var File = /*#__PURE__*/function () {
  /**
    *
    * @param {string} destination
    * @param {number} maxSize
    * @param {[]} allowedType
    */
  function File(destination) {
    var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var allowedType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    (0, _classCallCheck2["default"])(this, File);

    _classPrivateFieldInitSpec(this, _files, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _destination, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _maxSize, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _allowedType, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _errorMessage, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _urlfile, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])(this, _destination, destination);
    (0, _classPrivateFieldSet2["default"])(this, _maxSize, maxSize * 1000);
    (0, _classPrivateFieldSet2["default"])(this, _allowedType, allowedType);
  }
  /**
    *
    * @param {UploadedFile} uploadedFiles
    * @param {boolean} usePrefixName default true
    * @param {boolean} useHashName default true
    * @return {boolean}
    */


  (0, _createClass2["default"])(File, [{
    key: "upload",
    value: function upload(uploadedFiles) {
      var _this = this;

      var usePrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var useHashName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new Promise(function (resolve, reject) {
        (0, _classPrivateFieldSet2["default"])(_this, _files, uploadedFiles);

        if ((0, _classPrivateFieldGet2["default"])(_this, _maxSize) != 0 && (0, _classPrivateFieldGet2["default"])(_this, _files).getSize() > (0, _classPrivateFieldGet2["default"])(_this, _maxSize)) {
          (0, _classPrivateFieldSet2["default"])(_this, _errorMessage, 'File size is to big');
          throw new _UploadedFileError["default"]((0, _classPrivateFieldGet2["default"])(_this, _errorMessage));
        }

        if ((0, _classPrivateFieldGet2["default"])(_this, _allowedType).length > 0) {
          var allowed = (0, _classPrivateFieldGet2["default"])(_this, _allowedType).filter(function (x) {
            return x == uploadedFiles.getExtension();
          }).length != 0;

          if (!allowed) {
            (0, _classPrivateFieldSet2["default"])(_this, _errorMessage, 'File type is not supported');
            throw new _UploadedFileError["default"]((0, _classPrivateFieldGet2["default"])(_this, _errorMessage));
          }
        }

        var nameex = '';

        if (usePrefixName) {
          nameex = _DateFormat["default"].getFormattedCurrentDate() + '_';
        }

        var newName = '';

        if (!useHashName) {// newName = $nameex . str_replace([' ', '#', '+'], ['-', '-', '-'], $files->getName());
        } else {
          newName = nameex + (0, _md["default"])((0, _uuid.v4)()) + '.' + uploadedFiles.getExtension();
        }

        uploadedFiles.move(_config["default"].sourcePath + '/' + (0, _classPrivateFieldGet2["default"])(_this, _destination) + '/' + newName, function (err) {
          if (err) {
            (0, _classPrivateFieldSet2["default"])(_this, _errorMessage, 'Failed To upload file');
            reject(new _UploadedFileError["default"]((0, _classPrivateFieldGet2["default"])(_this, _errorMessage)));
          } else {
            (0, _classPrivateFieldSet2["default"])(_this, _urlfile, (0, _classPrivateFieldGet2["default"])(_this, _destination) + '/' + newName);
            resolve(true);
          }
        });
      });
    }
    /**
      *
      * @return {string}
      */

  }, {
    key: "getFileUrl",
    value: function getFileUrl() {
      return (0, _classPrivateFieldGet2["default"])(this, _urlfile);
    }
    /**
      *
      * @param {string} ext
      */

  }, {
    key: "addExtention",
    value: function addExtention(ext) {
      (0, _classPrivateFieldGet2["default"])(this, _allowedType).push(ext);
    }
  }]);
  return File;
}();

var _default = File;
exports["default"] = _default;