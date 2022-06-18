"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _nodemailer = require("nodemailer");

var _config = _interopRequireDefault(require("../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @class Transporter
 */
var Transporter = /*#__PURE__*/function () {
  function Transporter() {
    (0, _classCallCheck2["default"])(this, Transporter);
    (0, _defineProperty2["default"])(this, "mailData", {});
    (0, _defineProperty2["default"])(this, "transporter", null);
  }

  (0, _createClass2["default"])(Transporter, [{
    key: "createTransport",
    value:
    /**
     *
     * @return {Transporter}
     */
    function createTransport() {
      this.transporter = (0, _nodemailer.createTransport)({
        port: _config["default"].transportPort,
        host: _config["default"].transportHost,
        auth: {
          user: _config["default"].transportUsername,
          pass: _config["default"].transportPassword
        },
        secure: false
      });
      return this;
    }
    /**
     *
     * @param {string} emailAddress
     * @return {Transporter}
     */

  }, {
    key: "setFrom",
    value: function setFrom(emailAddress) {
      this.mailData = _objectSpread(_objectSpread({}, this.mailData), {}, {
        from: emailAddress
      });
      return this;
    }
    /**
     *
     * @param {string} emailAddress
     * @return {Transporter}
     */

  }, {
    key: "setTo",
    value: function setTo(emailAddress) {
      this.mailData = _objectSpread(_objectSpread({}, this.mailData), {}, {
        to: emailAddress
      });
      return this;
    }
    /**
     *
     * @param {string} subject
     * @return {Transporter}
     */

  }, {
    key: "setSubject",
    value: function setSubject(subject) {
      this.mailData = _objectSpread(_objectSpread({}, this.mailData), {}, {
        subject: subject
      });
      return this;
    }
    /**
     *
     * @param {string} text
     * @return {Transporter}
     */

  }, {
    key: "setText",
    value: function setText(text) {
      this.mailData = _objectSpread(_objectSpread({}, this.mailData), {}, {
        text: text
      });
      return this;
    }
    /**
     *
     * @param {string} html
     * @return {Transporter}
     */

  }, {
    key: "setHtml",
    value: function setHtml(html) {
      this.mailData = _objectSpread(_objectSpread({}, this.mailData), {}, {
        html: html
      });
      return this;
    }
    /**
     * Send the email
     */

  }, {
    key: "sendMail",
    value: function sendMail() {
      this.transporter.sendMail(this.mailData, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    }
  }]);
  return Transporter;
}();

var _default = Transporter;
exports["default"] = _default;