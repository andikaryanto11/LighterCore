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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _CronService = _interopRequireDefault(require("../Services/CronService"));

var _Command2 = _interopRequireDefault(require("../Utilities/Command"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class ResetCron
 */
var ResetCron = /*#__PURE__*/function (_Command) {
  (0, _inherits2["default"])(ResetCron, _Command);

  var _super = _createSuper(ResetCron);

  /**
   *
   */
  function ResetCron() {
    (0, _classCallCheck2["default"])(this, ResetCron);
    return _super.call(this);
  }
  /**
   *
   * @inheritdoc
   */


  (0, _createClass2["default"])(ResetCron, [{
    key: "name",
    value: function name() {
      return 'core:reset-cron';
    }
    /**
     *
     * @inheritdoc
     */

  }, {
    key: "description",
    value: function description() {
      return 'Reset cron if any changing cron ';
    }
    /**
     *
     * @inheritdoc
     */

  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(args) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _CronService["default"].resetCron();

              case 1:
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
  return ResetCron;
}(_Command2["default"]);

var _default = ResetCron;
exports["default"] = _default;