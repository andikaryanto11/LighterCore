"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Middleware2 = _interopRequireDefault(require("./Middleware"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class Hydrator
 */
var Hydrator = /*#__PURE__*/function (_Middleware) {
  (0, _inherits2["default"])(Hydrator, _Middleware);

  var _super = _createSuper(Hydrator);

  function Hydrator() {
    (0, _classCallCheck2["default"])(this, Hydrator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Hydrator, [{
    key: "hidrate",
    value:
    /**
     * Hidrate resource
     */
    function hidrate(_ref) {
      var request = _ref.request,
          params = _ref.params,
          next = _ref.next;
      throw new Error('"hidrate" function must be overrided');
    }
  }]);
  return Hydrator;
}(_Middleware2["default"]);

var _default = Hydrator;
exports["default"] = _default;