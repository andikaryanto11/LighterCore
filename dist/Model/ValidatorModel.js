"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

/**
 * @class ValidatorModel
 */
var ValidatorModel = /*#__PURE__*/function () {
  function ValidatorModel() {
    (0, _classCallCheck2["default"])(this, ValidatorModel);
  }

  (0, _createClass2["default"])(ValidatorModel, null, [{
    key: "validate",
    value:
    /**
    *
    * @param {{}} object
    * @param {[]} rules
    * @param {{}} customError
    * @return {Validator}
    */
    function validate(object, rules) {
      var customError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var validator = new _validatorjs["default"](object, rules, customError);
      return validator;
    }
  }]);
  return ValidatorModel;
}();

var _default = ValidatorModel;
exports["default"] = _default;