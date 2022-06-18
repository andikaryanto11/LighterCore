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

var _dotenv = _interopRequireDefault(require("dotenv"));

var _uuid = require("uuid");

var _PlainObject = _interopRequireDefault(require("../Libraries/PlainObject"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

_dotenv["default"].config();
/**
 * @class Session
 */


var Session = /*#__PURE__*/function () {
  /**
    * @param {Request} expressRequest
    */
  function Session(expressRequest) {
    (0, _classCallCheck2["default"])(this, Session);
    (0, _defineProperty2["default"])(this, "session", null);
    this.session = expressRequest.session;
  }
  /**
    * @param {Request} req
    * @param {Response} res
    * @param {*} next
    */


  (0, _createClass2["default"])(Session, null, [{
    key: "session",
    value: function session(req, res, next) {
      if (req.session.userlanguage == undefined) {
        req.session.userlanguage = null;
      }

      if (req.session.language == undefined && req.session.language == null) {
        req.session.language = process.env.APP_LANGUAGE;
      } else {
        if (req.session.language != process.env.APP_LANGUAGE) {
          req.session.language = process.env.APP_LANGUAGE;
        }
      }

      req.session.flashData = function flashData(key, value) {
        var instance = Session.getInstance();

        if (instance.flash == undefined) {
          instance.flash = {};
        }

        instance.flash = _objectSpread(_objectSpread({}, instance.flash), {}, (0, _defineProperty2["default"])({}, key, value));
      };

      req.session.hasFlashData = function hasFlashData(key) {
        var instance = Session.getInstance();

        if (_PlainObject["default"].isEmpty(instance.flash)) {
          return false;
        }

        return instance.flash[key] != undefined && instance.flash[key] != null;
      };

      req.session.getFlashData = function getFlashData(key) {
        var instance = Session.getInstance();

        if (_PlainObject["default"].isEmpty(instance.flash)) {
          return null;
        }

        var value = instance.flash[key];
        delete instance.flash[key];
        return value;
      };

      Session.instance = new Session(req);
      next();
    }
    /**
     * get instance
     * @return {Session}
     */

  }, {
    key: "getInstance",
    value: function getInstance() {
      if (this.instance != null) {
        return this.instance.session;
      }

      return this.instance;
    }
  }]);
  return Session;
}();

(0, _defineProperty2["default"])(Session, "instance", null);
var _default = Session;
exports["default"] = _default;