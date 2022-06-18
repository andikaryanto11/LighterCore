"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _DbConnection = _interopRequireDefault(require("../Database/Connection/DbConnection.js"));

var _ORM = _interopRequireDefault(require("../Database/ORM.js"));

var _Entity = _interopRequireDefault(require("./Entity"));

/**
 * @class EntityManager
 */
var EntityManager = /*#__PURE__*/function () {
  /**
   *
   */
  function EntityManager() {
    (0, _classCallCheck2["default"])(this, EntityManager);
    (0, _defineProperty2["default"])(this, "db", void 0);
    (0, _defineProperty2["default"])(this, "entity", void 0);
  }
  /**
   * Set entity
   * @param {Entity} entity
   * @return {EntityManager}
   */


  (0, _createClass2["default"])(EntityManager, [{
    key: "setEntity",
    value: function setEntity(entity) {
      this.entity = entity;
      return this;
    }
    /**
     * Store data to storage / database
     *
     * @param {Entity} entity
     * @param {any} transaction
     * @throws {Error}
     * @return {Promise<boolean>}
     */

  }, {
    key: "persist",
    value: function () {
      var _persist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(entity) {
        var transaction,
            obj,
            json,
            primaryKey,
            table,
            result,
            getPrimaryKey,
            id,
            setPrimaryKey,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transaction = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                this.setEntity(entity);
                obj = this.entity;
                _context.next = 5;
                return this.createJson(obj);

              case 5:
                json = _context.sent;
                this.validate(json);
                primaryKey = obj.constructor.getPrimaryKey();
                table = obj.constructor.getTable();
                result = null;
                getPrimaryKey = 'get' + primaryKey;

                if (!(obj[getPrimaryKey]() == null)) {
                  _context.next = 23;
                  break;
                }

                if (transaction != null) {
                  result = _DbConnection["default"].transacting(transaction).into(table).insert(json);
                } else {
                  result = _DbConnection["default"].into(table).insert(json);
                }

                _context.next = 15;
                return result;

              case 15:
                id = _context.sent;
                setPrimaryKey = 'set' + primaryKey;
                obj[setPrimaryKey](id[0]);

                if (!(id[0] > 0)) {
                  _context.next = 20;
                  break;
                }

                return _context.abrupt("return", true);

              case 20:
                return _context.abrupt("return", false);

              case 23:
                if (transaction != null) {
                  result = _DbConnection["default"].table(table).transacting(transaction).where(primaryKey, obj[getPrimaryKey]()).update(json);
                } else {
                  result = _DbConnection["default"].table(table).where(primaryKey, obj[primaryKey]).update(json);
                }

                _context.next = 26;
                return result;

              case 26:
                return _context.abrupt("return", true);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function persist(_x) {
        return _persist.apply(this, arguments);
      }

      return persist;
    }()
    /**
     * Json data before persisted
     * @param {Entity} entity
     * @return {Promise<{}>}
     */

  }, {
    key: "createJson",
    value: function () {
      var _createJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(entity) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return entity.toJson();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createJson(_x2) {
        return _createJson.apply(this, arguments);
      }

      return createJson;
    }()
    /**
     * Remove data from database
     * @param {Entity} entity
     * @param {any} transaction
     * @return {boolean}
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(entity) {
        var transaction,
            obj,
            primaryKey,
            table,
            ret,
            getPrimaryKey,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                transaction = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
                this.setEntity(entity);
                obj = this.entity;
                primaryKey = obj.constructor.getPrimaryKey();
                table = obj.constructor.getTable();
                ret = null;
                getPrimaryKey = 'get' + primaryKey;

                if (!(transaction != null)) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 10;
                return _DbConnection["default"].transacting(transaction).table(table).where(primaryKey, obj[getPrimaryKey]()).del();

              case 10:
                ret = _context3.sent;
                _context3.next = 16;
                break;

              case 13:
                _context3.next = 15;
                return _DbConnection["default"].table(table).where(primaryKey, obj[getPrimaryKey]()).del();

              case 15:
                ret = _context3.sent;

              case 16:
                if (!(ret > 0)) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return", true);

              case 18:
                return _context3.abrupt("return", false);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function remove(_x3) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
    /**
     * Validate Entity
     * @param {{}} object
     * @return {EntityManager}
     */

  }, {
    key: "validate",
    value: function validate(object) {
      var rules = this.entity.getRules();
      var validation = new _validatorjs["default"](object, rules);

      if (validation.fails()) {
        for (var _i = 0, _Object$entries = Object.entries(validation.errors.errors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          throw new Error(value[0]);
        }
      }

      return this;
    }
  }]);
  return EntityManager;
}();

var _default = EntityManager;
exports["default"] = _default;