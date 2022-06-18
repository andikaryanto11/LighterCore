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

var _InstanceLoader = _interopRequireDefault(require("../Express/InstanceLoader"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class GraphQLLoader
 */
var GraphQLLoader = /*#__PURE__*/function () {
  function GraphQLLoader() {
    (0, _classCallCheck2["default"])(this, GraphQLLoader);
  }

  (0, _createClass2["default"])(GraphQLLoader, null, [{
    key: "loadQuery",
    value:
    /**
     * Load all available all queries
     * @param {[]} queries
     * @return {[]}
     */
    function loadQuery(queries) {
      return this.loadFileds(queries);
    }
    /**
     * Load all available all mutations
     * @param {[]} mutations
     * @return {[]}
     */

  }, {
    key: "loadMutation",
    value: function loadMutation(mutations) {
      return this.loadFileds(mutations);
    }
    /**
     * Load all fields
     * @param {[]} fields
     * @return {[]}
     */

  }, {
    key: "loadFileds",
    value: function loadFileds(fields) {
      var newFields = {};

      var _iterator = _createForOfIteratorHelper(fields),
          _step;

      try {
        var _loop = function _loop() {
          var field = _step.value;

          var fieldIntance = _InstanceLoader["default"].load(field);

          var instanceName = fieldIntance.constructor.name;
          var queryName = instanceName.charAt(0).toLowerCase() + instanceName.slice(1);
          newFields[queryName] = {
            type: fieldIntance.type(),
            args: fieldIntance.args(),
            description: fieldIntance.description(),
            extensions: fieldIntance.extensions,
            resolve: function () {
              var _resolve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, context) {
                var middlewares, _iterator2, _step2, middleware, middlewareInstance;

                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        middlewares = fieldIntance.middlewares();
                        _iterator2 = _createForOfIteratorHelper(middlewares);
                        _context.prev = 2;

                        _iterator2.s();

                      case 4:
                        if ((_step2 = _iterator2.n()).done) {
                          _context.next = 11;
                          break;
                        }

                        middleware = _step2.value;
                        middlewareInstance = _InstanceLoader["default"].load(middleware);
                        _context.next = 9;
                        return middlewareInstance.execute(context.request, context.response);

                      case 9:
                        _context.next = 4;
                        break;

                      case 11:
                        _context.next = 16;
                        break;

                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](2);

                        _iterator2.e(_context.t0);

                      case 16:
                        _context.prev = 16;

                        _iterator2.f();

                        return _context.finish(16);

                      case 19:
                        return _context.abrupt("return", fieldIntance.resolve(parent, args, context.request, context));

                      case 20:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[2, 13, 16, 19]]);
              }));

              function resolve(_x, _x2, _x3) {
                return _resolve.apply(this, arguments);
              }

              return resolve;
            }()
          };
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return newFields;
    }
  }]);
  return GraphQLLoader;
}();

var _default = GraphQLLoader;
exports["default"] = _default;