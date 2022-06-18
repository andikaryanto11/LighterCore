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

var _DbTrans = _interopRequireDefault(require("../Database/DbTrans"));

var _Entity = _interopRequireDefault(require("./Entity"));

var _EntityManager = _interopRequireDefault(require("./EntityManager"));

var _EntityScope = _interopRequireDefault(require("./EntityScope"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class EntityUnit
 */
var EntityUnit = /*#__PURE__*/function () {
  function EntityUnit() {
    (0, _classCallCheck2["default"])(this, EntityUnit);
  }

  (0, _createClass2["default"])(EntityUnit, [{
    key: "preparePersistence",
    value:
    /**
     * Prepare entity that will be persisted. Will persisted after entity unit flush
     *
     * @param {Entity} entity
     * @return {EntityUnit}
     */
    function preparePersistence(entity) {
      var enttityScope = _EntityScope["default"].getInstance();

      enttityScope.addEntity(_EntityScope["default"].PERFORM_ADD_UPDATE, entity);
      return this;
    }
    /**
     * Prepare entity that will be removed. Will removed after entity unit flush
     *
     * @param {Entity} entity
     * @return {EntityUnit}
     */

  }, {
    key: "prepareRemove",
    value: function prepareRemove(entity) {
      var enttityScope = _EntityScope["default"].getInstance();

      enttityScope.addEntity(_EntityScope["default"].PERFORM_DELETE, entity);
      return this;
    }
    /**
     * Persist all entities to table
     *
     * @return {Promise<void>}
     */

  }, {
    key: "flush",
    value: function () {
      var _flush = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var entityScope, entityManager, transaction, entities, _iterator, _step, value;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                entityScope = _EntityScope["default"].getInstance();
                entityManager = new _EntityManager["default"]();
                _context.next = 4;
                return _DbTrans["default"].beginTransaction();

              case 4:
                transaction = _context.sent;
                entities = entityScope.getEntities();

                if (!(entities.length > 0)) {
                  _context.next = 47;
                  break;
                }

                _context.prev = 7;
                _iterator = _createForOfIteratorHelper(entities);
                _context.prev = 9;

                _iterator.s();

              case 11:
                if ((_step = _iterator.n()).done) {
                  _context.next = 28;
                  break;
                }

                value = _step.value;

                if (!(value.perform == _EntityScope["default"].PERFORM_ADD_UPDATE)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 16;
                return entityManager.persist(value.entity, transaction);

              case 16:
                if (_context.sent) {
                  _context.next = 18;
                  break;
                }

                throw new Error('Failed to persist data to database');

              case 18:
                _context.next = 26;
                break;

              case 20:
                if (!(value.perform == _EntityScope["default"].PERFORM_DELETE)) {
                  _context.next = 26;
                  break;
                }

                _context.next = 23;
                return entityManager.remove(value.entity, transaction);

              case 23:
                if (_context.sent) {
                  _context.next = 25;
                  break;
                }

                throw new Error('Failed to delete data from database');

              case 25:
                ;

              case 26:
                _context.next = 11;
                break;

              case 28:
                _context.next = 33;
                break;

              case 30:
                _context.prev = 30;
                _context.t0 = _context["catch"](9);

                _iterator.e(_context.t0);

              case 33:
                _context.prev = 33;

                _iterator.f();

                return _context.finish(33);

              case 36:
                _context.next = 38;
                return transaction.commit();

              case 38:
                entityScope.clean();
                _context.next = 47;
                break;

              case 41:
                _context.prev = 41;
                _context.t1 = _context["catch"](7);
                _context.next = 45;
                return transaction.rollback();

              case 45:
                entityScope.clean();
                throw _context.t1;

              case 47:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 41], [9, 30, 33, 36]]);
      }));

      function flush() {
        return _flush.apply(this, arguments);
      }

      return flush;
    }()
  }]);
  return EntityUnit;
}();

var _default = EntityUnit;
exports["default"] = _default;