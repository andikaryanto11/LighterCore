"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Logger2 = _interopRequireDefault(require("./Logger"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class Logger
 */
var Warning = /*#__PURE__*/function (_Logger) {
  (0, _inherits2["default"])(Warning, _Logger);

  var _super = _createSuper(Warning);

  function Warning() {
    (0, _classCallCheck2["default"])(this, Warning);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Warning, null, [{
    key: "create",
    value:
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} message
     */
    function create(fileName, message) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Warning), "create", this).call(this, fileName, 'Warning', message);
    }
  }]);
  return Warning;
}(_Logger2["default"]);

var _default = Warning;
exports["default"] = _default;