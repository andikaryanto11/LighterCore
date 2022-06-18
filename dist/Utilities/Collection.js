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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class Collection
 */
var Collection = /*#__PURE__*/function () {
  /**
    *
    * @param {[]} items
    */
  function Collection() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    (0, _classCallCheck2["default"])(this, Collection);
    (0, _defineProperty2["default"])(this, "items", []);
    (0, _defineProperty2["default"])(this, "page", null);
    (0, _defineProperty2["default"])(this, "size", null);
    (0, _defineProperty2["default"])(this, "total", null);
    this.items = items;
  }
  /**
    * add data to collection
    *
    * @param {[]} item
    * @return {Collection}
    */


  (0, _createClass2["default"])(Collection, [{
    key: "add",
    value: function add(item) {
      this.items.push(item);
      return this;
    }
    /**
     *
     * @return {number}
     */

  }, {
    key: "getTotal",
    value: function getTotal() {
      return this.total;
    }
    /**
     *
     * @param {number} total
     * @return {Collection}
     */

  }, {
    key: "setTotal",
    value: function setTotal(total) {
      this.total = total;
      return this;
    }
    /**
     *
     * @return {number}
     */

  }, {
    key: "getPage",
    value: function getPage() {
      return this.page;
    }
    /**
     *
     * @param {number} page
     * @return {Collection}
     */

  }, {
    key: "setPage",
    value: function setPage(page) {
      this.page = page;
      return this;
    }
    /**
     *
     * @return {number}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
    /**
     *
     * @param {?number} size
     * @return {Collection}
     */

  }, {
    key: "setSize",
    value: function setSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.size = size;
      return this;
    }
    /**
      * Filter data with Function parameter
      * @param {Function} closure
      * @return {Collection}
      */

  }, {
    key: "filter",
    value: function () {
      var _filter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(closure) {
        var newdata, _iterator, _step, item, resultData, construct;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newdata = [];
                _iterator = _createForOfIteratorHelper(this.items);
                _context.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }

                item = _step.value;
                resultData = closure(item);

                if (!(resultData instanceof Promise)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 10;
                return resultData;

              case 10:
                if (!_context.sent) {
                  _context.next = 12;
                  break;
                }

                newdata.push(item);

              case 12:
                _context.next = 15;
                break;

              case 14:
                if (resultData) {
                  newdata.push(item);
                }

              case 15:
                _context.next = 4;
                break;

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](2);

                _iterator.e(_context.t0);

              case 22:
                _context.prev = 22;

                _iterator.f();

                return _context.finish(22);

              case 25:
                ;
                construct = this.constructor;
                return _context.abrupt("return", new construct(newdata));

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 19, 22, 25]]);
      }));

      function filter(_x) {
        return _filter.apply(this, arguments);
      }

      return filter;
    }()
    /**
      *
      * @param {Function} closure
      * @return {[]}
      */

  }, {
    key: "where",
    value: function () {
      var _where = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(closure) {
        var newdata, _iterator2, _step2, item, resultData, construct;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newdata = [];
                _iterator2 = _createForOfIteratorHelper(this.items);
                _context2.prev = 2;

                _iterator2.s();

              case 4:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 17;
                  break;
                }

                item = _step2.value;
                resultData = closure(item);

                if (!(resultData instanceof Promise)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 10;
                return resultData;

              case 10:
                if (!_context2.sent) {
                  _context2.next = 12;
                  break;
                }

                newdata.push(item);

              case 12:
                _context2.next = 15;
                break;

              case 14:
                if (resultData) {
                  newdata.push(item);
                }

              case 15:
                _context2.next = 4;
                break;

              case 17:
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](2);

                _iterator2.e(_context2.t0);

              case 22:
                _context2.prev = 22;

                _iterator2.f();

                return _context2.finish(22);

              case 25:
                construct = this.constructor;
                return _context2.abrupt("return", new construct(newdata));

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 19, 22, 25]]);
      }));

      function where(_x2) {
        return _where.apply(this, arguments);
      }

      return where;
    }()
    /**
      *
      * @return {boolean}
      */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length == 0;
    }
    /**
     * Get first item of collection
     * @return {any}
     */

  }, {
    key: "first",
    value: function first() {
      if (this.items.length > 0) {
        return this.items[0];
      }

      return null;
    }
    /**
     * Map items of collection
     * @param {Function} closure
     */

  }, {
    key: "map",
    value: function () {
      var _map = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(closure) {
        var newdata, _iterator3, _step3, item, resultData, construct;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                newdata = [];
                _iterator3 = _createForOfIteratorHelper(this.items);
                _context3.prev = 2;

                _iterator3.s();

              case 4:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 18;
                  break;
                }

                item = _step3.value;
                resultData = closure(item);

                if (!(resultData instanceof Promise)) {
                  _context3.next = 15;
                  break;
                }

                _context3.t0 = newdata;
                _context3.next = 11;
                return resultData;

              case 11:
                _context3.t1 = _context3.sent;

                _context3.t0.push.call(_context3.t0, _context3.t1);

                _context3.next = 16;
                break;

              case 15:
                if (resultData) {
                  newdata.push(resultData);
                }

              case 16:
                _context3.next = 4;
                break;

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t2 = _context3["catch"](2);

                _iterator3.e(_context3.t2);

              case 23:
                _context3.prev = 23;

                _iterator3.f();

                return _context3.finish(23);

              case 26:
                construct = this.constructor;
                return _context3.abrupt("return", new construct(newdata));

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 20, 23, 26]]);
      }));

      function map(_x3) {
        return _map.apply(this, arguments);
      }

      return map;
    }()
    /**
      *
      * @param {number} number
      * @return {[]}
      */

  }, {
    key: "take",
    value: function take(number) {
      if (number <= 0) {
        throw new Error('Number must be greater than 0 (zero)');
      }

      var construct = this.constructor;

      if (this.items.length < number) {
        return new construct(this.items);
      } else {
        var newItems = this.items.slice(0, number);
        return new construct(newItems);
      }
    }
    /**
      *
      * @return {number}
      */

  }, {
    key: "size",
    value: function size() {
      return this.items.length;
    }
    /**
      *
      * @return {[]}
      */

  }, {
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
    /**
      *
      * @return {[]}
      * @throws {Error}
      */

  }, {
    key: "getItemsOrFail",
    value: function getItemsOrFail() {
      if (this.isEmpty()) {
        throw new Error('No Data Found');
      }

      return this.items;
    }
  }]);
  return Collection;
}();

var _default = Collection;
exports["default"] = _default;