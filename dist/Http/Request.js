"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _UploadedFile = _interopRequireDefault(require("../Libraries/UploadedFile.js"));

var _express = require("express");

/**
 * @class Request
 */
var Request = /*#__PURE__*/function () {
  /**
   * @var {Request} instance
   */

  /**
    *
    */
  function Request() {
    (0, _classCallCheck2["default"])(this, Request);
    (0, _defineProperty2["default"])(this, "request", null);
  }
  /**
    * @param {ExpressRequest} req
    * @param {ExpressResponse} res
    * @param {*} next
    */


  (0, _createClass2["default"])(Request, [{
    key: "setRequest",
    value:
    /**
     *
     * @param {*} req
     * @return {Request}
     */
    function setRequest(req) {
      req = Request.files(req);
      Request.resource(req);
      return this;
    }
    /**
     *
     * @param {any} req
     */

  }, {
    key: "getRequest",
    value:
    /**
     *
     * @return {{}}
     */
    function getRequest() {
      return this.request;
    }
    /**
     * Get instance
      * @return {ExpressRequest}
      */

  }], [{
    key: "request",
    value: function request(req, res, next) {
      Request.getInstance().setRequest(req);
      next();
    }
  }, {
    key: "resource",
    value: function resource(req) {
      req.resource = null;

      req.setResource = function (resource) {
        req.resource = resource;
      };

      req.getResource = function () {
        return req.resource;
      };

      this.request = req;
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      if (this.instance == null) {
        this.instance = new this();
      }

      return this.instance;
    }
    /**
     *
     * @param {ExpressRequest} req
     * @return {ExpressRequest}
     */

  }, {
    key: "files",
    value: function files(req) {
      req.uploadedFiles = {};
      var files = req.files;

      if (req.files != null && req.files != undefined) {
        var _loop = function _loop() {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          req.uploadedFiles[key] = [];

          if (Array.isArray(value)) {
            value.forEach(function (element) {
              var uploadedFile = new _UploadedFile["default"](element);
              req.uploadedFiles[key].push(uploadedFile);
            });
          } else {
            var uploadedFile = new _UploadedFile["default"](value);
            req.uploadedFiles[key].push(uploadedFile);
          }
        };

        for (var _i = 0, _Object$entries = Object.entries(files); _i < _Object$entries.length; _i++) {
          _loop();
        }
      }

      req.getFiles = function () {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (name != null) {
          var uploaded = req.uploadedFiles[name];

          if (uploaded.length > 1) {
            return uploaded;
          }

          return uploaded[0];
        }

        return req.uploadedFiles;
      };

      return req;
    }
  }]);
  return Request;
}();

(0, _defineProperty2["default"])(Request, "instance", null);
var _default = Request;
exports["default"] = _default;