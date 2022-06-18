"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _orm = _interopRequireDefault(require("../../orm"));

/**
 * @class ORM
 */
var ORM = /*#__PURE__*/function () {
  /**
   *
   */
  function ORM() {
    (0, _classCallCheck2["default"])(this, ORM);
  }
  /**
   *
   * @param {string} key
   * @return {{}}
   */


  (0, _createClass2["default"])(ORM, null, [{
    key: "getProps",
    value: function getProps(key) {
      var ormFields = _orm["default"].filter(function (x) {
        return x[key];
      })[0][key].props;

      return ormFields;
    }
    /**
     *
     * @param {string} key
     * @return {string}
     */

  }, {
    key: "getTable",
    value: function getTable(key) {
      var table = _orm["default"].filter(function (x) {
        return x[key];
      })[0][key].table;

      return table;
    }
    /**
     *
     * @param {string} key
     * @return {string}
     */

  }, {
    key: "getPrimaryKey",
    value: function getPrimaryKey(key) {
      var table = _orm["default"].filter(function (x) {
        return x[key];
      })[0][key].primaryKey;

      return table;
    }
  }]);
  return ORM;
}();

var _default = ORM;
exports["default"] = _default;