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

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Entity = _interopRequireDefault(require("../Entity/Entity"));

var _Collection = _interopRequireDefault(require("../Utilities/Collection"));

var _ViewModel = _interopRequireDefault(require("./ViewModel"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _collection = /*#__PURE__*/new WeakMap();

var _element = /*#__PURE__*/new WeakMap();

/**
 * @class Collection
 */
var Collection = /*#__PURE__*/function () {
  /**
   *
   * @param {UtilCollection|array} collection
   */
  function Collection(collection) {
    (0, _classCallCheck2["default"])(this, Collection);

    _classPrivateFieldInitSpec(this, _collection, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: []
    });

    (0, _classPrivateFieldSet2["default"])(this, _collection, collection);
  }
  /**
   *
   * @param {Entity} model
   */


  (0, _createClass2["default"])(Collection, [{
    key: "shape",
    value: function () {
      var _shape = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model) {
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

      function shape(_x) {
        return _shape.apply(this, arguments);
      }

      return shape;
    }()
    /**
     *
     * @return {number|null}
     */

  }, {
    key: "getPage",
    value: function getPage() {
      if ((0, _classPrivateFieldGet2["default"])(this, _collection) instanceof _Collection["default"]) {
        return (0, _classPrivateFieldGet2["default"])(this, _collection).getPage();
      }

      return null;
    }
    /**
     *
     * @return {number|null}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      if ((0, _classPrivateFieldGet2["default"])(this, _collection) instanceof _Collection["default"]) {
        return (0, _classPrivateFieldGet2["default"])(this, _collection).getSize();
      }

      return null;
    }
    /**
     *
     * @return {number|null}
     */

  }, {
    key: "getTotal",
    value: function getTotal() {
      if ((0, _classPrivateFieldGet2["default"])(this, _collection) instanceof _Collection["default"]) {
        return (0, _classPrivateFieldGet2["default"])(this, _collection).getTotal();
      }

      return null;
    }
    /**
     * proceed shaping to view model
     * @return {this}
     */

  }, {
    key: "proceed",
    value: function () {
      var _proceed = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var arrayCollection, _iterator, _step, item;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                arrayCollection = [];
                arrayCollection = (0, _classPrivateFieldGet2["default"])(this, _collection);
                _iterator = _createForOfIteratorHelper(arrayCollection);
                _context2.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 11;
                  break;
                }

                item = _step.value;
                _context2.next = 9;
                return this.shape(item);

              case 9:
                _context2.next = 5;
                break;

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);

                _iterator.e(_context2.t0);

              case 16:
                _context2.prev = 16;

                _iterator.f();

                return _context2.finish(16);

              case 19:
                return _context2.abrupt("return", this);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13, 16, 19]]);
      }));

      function proceed() {
        return _proceed.apply(this, arguments);
      }

      return proceed;
    }()
    /**
     * Process all data and return it
     * @return {[]}
     */

  }, {
    key: "proceedAndGetData",
    value: function () {
      var _proceedAndGetData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.proceed();

              case 2:
                return _context3.abrupt("return", _context3.sent.getElements());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function proceedAndGetData() {
        return _proceedAndGetData.apply(this, arguments);
      }

      return proceedAndGetData;
    }()
    /**
     * Add item element
     * @param {BaseViewModel} viewModel
     * @return {void}
     */

  }, {
    key: "addItem",
    value: function () {
      var _addItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(viewModel) {
        var item;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return viewModel.toJson();

              case 2:
                item = _context4.sent;
                (0, _classPrivateFieldGet2["default"])(this, _element).push(item);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addItem(_x2) {
        return _addItem.apply(this, arguments);
      }

      return addItem;
    }()
    /**
     * Get elemet
     * @return {[]}
     */

  }, {
    key: "getElements",
    value: function getElements() {
      return (0, _classPrivateFieldGet2["default"])(this, _element);
    }
  }]);
  return Collection;
}();

var _default = Collection;
exports["default"] = _default;