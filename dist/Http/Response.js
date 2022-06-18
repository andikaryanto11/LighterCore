"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = require("express");

/**
 * @clas Response
 */
var Response = /*#__PURE__*/function () {
  /**
    * @param {ExpressResponse} expressResponse
    */
  function Response(expressResponse) {
    (0, _classCallCheck2["default"])(this, Response);
    (0, _defineProperty2["default"])(this, "response", null);
    this.response = expressResponse;
  }
  /**
    * @param {Request} req
    * @param {ExpressResponse} res
    * @param {*} next
    */


  (0, _createClass2["default"])(Response, null, [{
    key: "response",
    value: function response(req, res, next) {
      Response.instance = new Response(res);
      next();
    }
    /**
     * Get instance
      * @return {ExpressResponse}
      */

  }, {
    key: "getInstance",
    value: function getInstance() {
      // if(this.instance != null)
      return this.instance.response; // return this.instance;
    }
  }]);
  return Response;
}();

(0, _defineProperty2["default"])(Response, "instance", null);
var _default = Response;
exports["default"] = _default;