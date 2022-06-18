"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _arguments = /*#__PURE__*/new WeakMap();

/**
 * @class Command
 */
var Command = /*#__PURE__*/function () {
  /**
   *
   */
  function Command() {
    (0, _classCallCheck2["default"])(this, Command);

    _classPrivateFieldInitSpec(this, _arguments, {
      writable: true,
      value: []
    });
  }
  /**
   *
   * @param {string} type
   * @param {string} name
   * @param {string} description
   */


  (0, _createClass2["default"])(Command, [{
    key: "addArgument",
    value: function addArgument(type, name, description) {
      (0, _classPrivateFieldGet2["default"])(this, _arguments).push({
        type: type,
        name: name,
        description: description
      });
    }
    /**
     * get all current command
     * @return {[]}
     */

  }, {
    key: "getArguments",
    value: function getArguments() {
      return (0, _classPrivateFieldGet2["default"])(this, _arguments);
    }
    /**
     * Name of command
     * @return {string}
     */

  }, {
    key: "name",
    value: function name() {
      return '';
    }
    /**
     * Description of command
     *
     * @return {string}
     */

  }, {
    key: "description",
    value: function description() {
      return '';
    }
    /**
     *
     * @param {{}} args
     * @return {any}
     */

  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(args) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return Command;
}();

(0, _defineProperty2["default"])(Command, "REQUIRE_TYPE", 'required');
(0, _defineProperty2["default"])(Command, "OPTION_TYPE", 'option');
var _default = Command;
exports["default"] = _default;