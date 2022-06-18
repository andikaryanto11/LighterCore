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

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Model = _interopRequireDefault(require("../Model/Model"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _autoAddResource = /*#__PURE__*/new WeakMap();

/**
 * @clas ViewModel
 */
var ViewModel = /*#__PURE__*/function () {
  /**
   *
   * @param {bool} autoAddResource
   * @param {Model} entity
   */
  function ViewModel(autoAddResource, entity) {
    (0, _classCallCheck2["default"])(this, ViewModel);
    (0, _defineProperty2["default"])(this, "entity", null);

    _classPrivateFieldInitSpec(this, _autoAddResource, {
      writable: true,
      value: false
    });

    this.entity = entity;
    (0, _classPrivateFieldSet2["default"])(this, _autoAddResource, autoAddResource);
  }
  /**
   * Add Resource
   * @param {BaseViewModel} viewModel
   */


  (0, _createClass2["default"])(ViewModel, [{
    key: "addResource",
    value: function () {
      var _addResource = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(viewModel) {
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

      function addResource(_x) {
        return _addResource.apply(this, arguments);
      }

      return addResource;
    }()
    /**
     * Set auto add resource
     * @param {*} addResource
     */

  }, {
    key: "setAutoAddResource",
    value: function setAutoAddResource() {
      var addResource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      (0, _classPrivateFieldSet2["default"])(this, _autoAddResource, addResource);
    }
    /**
     * Get auto add resouce
     * @return {boolean}
     */

  }, {
    key: "getAutoAddResource",
    value: function getAutoAddResource() {
      return (0, _classPrivateFieldGet2["default"])(this, _autoAddResource);
    }
    /**
     *
     */

  }, {
    key: "toJson",
    value: function () {
      var _toJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function toJson() {
        return _toJson.apply(this, arguments);
      }

      return toJson;
    }()
  }]);
  return ViewModel;
}();

var _default = ViewModel;
exports["default"] = _default;