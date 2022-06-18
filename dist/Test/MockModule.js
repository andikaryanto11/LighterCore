"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class MockModule
 */
var MockModule = /*#__PURE__*/function () {
  function MockModule() {
    (0, _classCallCheck2["default"])(this, MockModule);
  }

  (0, _createClass2["default"])(MockModule, null, [{
    key: "mockModule",
    value:
    /**
     * Mock Module
     * @param {*} module
     * @param {*} fnName
     * @param {*} returnValue
     * @return {*}
     */
    function mockModule(module, fnName) {
      var returnValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var jestInstance = jest.spyOn(module['prototype'], fnName);
      var result = null;

      if (typeof returnValue === 'function') {
        result = returnValue();
      } else {
        result = returnValue;
      }

      return jestInstance.mockImplementation(function () {
        return result;
      });
    }
  }]);
  return MockModule;
}();

var _default = MockModule;
exports["default"] = _default;