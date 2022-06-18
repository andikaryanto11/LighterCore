"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

/**
 * @class DateFormat
 */
var DateFormat = /*#__PURE__*/function () {
  function DateFormat() {
    (0, _classCallCheck2["default"])(this, DateFormat);
  }

  (0, _createClass2["default"])(DateFormat, null, [{
    key: "getFormattedCurrentDate",
    value:
    /**
     * Get formatted current date
     * @param {[]} format
     * @param {string} seprator
     * @return {string}
     */
    function getFormattedCurrentDate() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var seprator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

      /**
       *
       * @param {*} m
       * @return {string}
       */
      function formated(m) {
        var t = new Date();
        var f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
      }

      var newFormat = [];

      if (newFormat.length == 0) {
        newFormat = [{
          year: 'numeric'
        }, {
          month: 'short'
        }, {
          day: 'numeric'
        }];
      } else {
        newFormat = format;
      }

      return newFormat.map(formated).join(seprator);
    }
    /**
      * Formatted date using moment js
      * @param {string} format
      * @return {string}
      */

  }, {
    key: "getCurrentDate",
    value: function getCurrentDate(format) {
      return (0, _moment["default"])().format(format);
    }
    /**
     *
     * @param {Date} date
     * @return {string}
     */

  }, {
    key: "databaseDate",
    value: function databaseDate(date) {
      return (0, _moment["default"])(date).format('YYYY-MM-DD hh:mm:ss');
    }
  }]);
  return DateFormat;
}();

var _default = DateFormat;
exports["default"] = _default;