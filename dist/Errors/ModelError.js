"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Model = _interopRequireDefault(require("../Model/Model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _message = /*#__PURE__*/new WeakMap();

var _model = /*#__PURE__*/new WeakMap();

/**
 * @class ModelError
 */
var ModelError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ModelError, _Error);

  var _super = _createSuper(ModelError);

  /**
   *
   * @param {string} message
   * @param {Model} model
   */
  function ModelError(message) {
    var _this;

    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck2["default"])(this, ModelError);
    _this = _super.call(this, message);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _message, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _model, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _message, message);
    (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _model, model);
    return _this;
  }
  /**
   * Get error message
   * @return {string}
   */


  (0, _createClass2["default"])(ModelError, [{
    key: "getMessage",
    value: function getMessage() {
      return (0, _classPrivateFieldGet2["default"])(this, _message);
    }
    /**
     * Get model instance
     * @return {Model}
     */

  }, {
    key: "getModel",
    value: function getModel() {
      return (0, _classPrivateFieldGet2["default"])(this, _model);
    }
  }]);
  return ModelError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

var _default = ModelError;
exports["default"] = _default;