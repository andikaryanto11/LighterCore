"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _Collection = _interopRequireDefault(require("../../App/Config/Collection.js"));

var _DbConnection = _interopRequireDefault(require("../Database/Connection/DbConnection.js"));

var _Entity = _interopRequireDefault(require("../Entity/Entity"));

var _EntityList = _interopRequireDefault(require("../Entity/EntityList"));

var _PlainObject = _interopRequireDefault(require("../Libraries/PlainObject.js"));

var _Criteria = _interopRequireDefault(require("./Criteria.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class Respository
 */
var Repository = /*#__PURE__*/function () {
  /**
  *
   * @param {Entity} entity
   */
  function Repository(entity) {
    (0, _classCallCheck2["default"])(this, Repository);
    (0, _defineProperty2["default"])(this, "table", void 0);
    (0, _defineProperty2["default"])(this, "colums", void 0);
    (0, _defineProperty2["default"])(this, "entity", void 0);
    (0, _defineProperty2["default"])(this, "db", void 0);
    this.entity = entity;
    var table = this.entity.getTable();
    this.db = _DbConnection["default"].table(table);
  }
  /**
   * create new Entity
   * @return {any}
   */


  (0, _createClass2["default"])(Repository, [{
    key: "newEntity",
    value: function newEntity() {
      return new this.entity();
    }
    /**
      * Fetch the data from database
      * @param {{}|Criteria} filter
      * @param {[]} columns
      * @param {number|null} page
      * @param {number|null} size
      */

  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var filter,
            columns,
            page,
            size,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                columns = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                page = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                size = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                _context.next = 6;
                return this.fetch(filter, columns, {}, page, size);

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
    /**
      * Set filter before fecthing data from database
      * @param {{}} filter
      * @param {number|null} page
      * @param {number|null} size
      * @return {this}
      */

  }, {
    key: "setFilter",
    value: function setFilter() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (filter.join != undefined) {
        for (var _i = 0, _Object$entries = Object.entries(filter.join); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (value.type == undefined || value.type.toUpperCase() == 'INNER') {
            this.db.innerJoin(key, value.key[0], value.key[1]);
          } else {
            if (value.type.toUpperCase() == 'LEFT') {
              this.db.leftJoin(key, value.key[0], value.key[1]);
            }
          }
        }
      }

      if (filter.where != undefined) {
        this.db.where(filter.where);
      }

      if (filter.whereNot != undefined) {
        this.db.whereNot(filter.whereNot);
      }

      if (filter.whereIn != undefined) {
        for (var _i2 = 0, _Object$entries2 = Object.entries(filter.whereIn); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
              _key = _Object$entries2$_i[0],
              _value = _Object$entries2$_i[1];

          this.db.whereIn(_key, _value);
        }
      }

      if (filter.like != undefined) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(filter.like); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = (0, _slicedToArray2["default"])(_Object$entries3[_i3], 2),
              _key2 = _Object$entries3$_i[0],
              _value2 = _Object$entries3$_i[1];

          this.db.where(_key2, 'like', "%".concat(_value2, "%"));
        }
      }

      if (filter.orLike != undefined) {
        for (var _i4 = 0, _Object$entries4 = Object.entries(filter.whereIn); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = (0, _slicedToArray2["default"])(_Object$entries4[_i4], 2),
              _key3 = _Object$entries4$_i[0],
              _value3 = _Object$entries4$_i[1];

          this.db.orWhere(_key3, 'like', "%".concat(_value3, "%"));
        }
      }

      if (filter.group != undefined) {
        if (filter.group.orLike != undefined) {
          this.db.where(function () {
            var i = 0;

            for (var _i5 = 0, _Object$entries5 = Object.entries(filter.group.orLike); _i5 < _Object$entries5.length; _i5++) {
              var _Object$entries5$_i = (0, _slicedToArray2["default"])(_Object$entries5[_i5], 2),
                  _key4 = _Object$entries5$_i[0],
                  _value4 = _Object$entries5$_i[1];

              if (i == 0) {
                this.where(_key4, 'like', "%".concat(_value4, "%"));
              } else {
                this.orWhere(_key4, 'like', "%".concat(_value4, "%"));
              }

              i++;
            }
          });
        }
      }

      if (filter.order != undefined) {
        for (var _i6 = 0, _Object$entries6 = Object.entries(filter.order); _i6 < _Object$entries6.length; _i6++) {
          var _Object$entries6$_i = (0, _slicedToArray2["default"])(_Object$entries6[_i6], 2),
              _key5 = _Object$entries6$_i[0],
              _value5 = _Object$entries6$_i[1];

          this.db.orderBy(_key5, _value5);
        }
      }

      if (!('page' in filter) || !('size' in filter)) {
        filter.page = page;
        filter.size = size;
      }

      if (filter.page != undefined && filter.size != undefined && filter.page != null && filter.size != null && filter.page != 0 && filter.size != 0) {
        var offset = filter.size * (filter.page - 1);
        this.db.limit(filter.size).offset(offset);
      }

      return this;
    }
    /**
      * Fetch the data from database
      * @param {{}|Criteria} filter
      * @param {[]} columns
      * @param {{}} associatedKey
      * @param {number|null} page
      * @param {number|null} size
      * @return {Promise<[]>}
      */

  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var filter,
            columns,
            associatedKey,
            page,
            size,
            results,
            result,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                columns = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
                associatedKey = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                page = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
                size = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
                this.columns = this.entity.getSelectColumns();

                if (columns.length > 0) {
                  this.columns = columns;
                }

                this.db.column(this.columns);

                if (filter instanceof _Criteria["default"]) {
                  filter = filter.getFilter();
                }

                this.setFilter(filter, page, size);
                _context2.next = 12;
                return this.db;

              case 12:
                results = _context2.sent;
                this.db.clear('select').clear('where').clear('join').clear('order').clear('limit').clear('offset').clear('having');
                result = this.setToEntity(results, associatedKey);
                return _context2.abrupt("return", result);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
      * Set to instance of current class
      * @param {[]} results
      * @param {{}} associatedKey
      * @return {[]}
      */

  }, {
    key: "setToEntity",
    value: function setToEntity(results, associatedKey) {
      var objects = [];
      var newClassName = this.entity;
      var props = this.entity.getProps();

      var _iterator = _createForOfIteratorHelper(results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var result = _step.value;
          var e = result;
          var obj = new newClassName();

          for (var _i7 = 0, _Object$entries7 = Object.entries(props); _i7 < _Object$entries7.length; _i7++) {
            var _Object$entries7$_i = (0, _slicedToArray2["default"])(_Object$entries7[_i7], 2),
                key = _Object$entries7$_i[0],
                value = _Object$entries7$_i[1];

            if (value.isPrimitive) {
              if (value.type == 'datetime') {
                var datetimeValue = null;

                if (e[key]) {
                  datetimeValue = new Date(e[key]);
                }

                obj[key] = datetimeValue;
              } else {
                obj[key] = e[key];
              }
            } else {
              var foreignKeyValue = e[value.foreignKey];

              if (foreignKeyValue) {
                if (value.foreignKey in associatedKey) {
                  if (!associatedKey[value.foreignKey].includes(foreignKeyValue)) {
                    associatedKey[value.foreignKey] = [].concat((0, _toConsumableArray2["default"])(associatedKey[value.foreignKey]), [foreignKeyValue]);
                  }
                } else {
                  associatedKey[value.foreignKey] = [foreignKeyValue];
                }

                obj.constrains[value.foreignKey] = foreignKeyValue;
              }
            }
          }

          objects.push(obj);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return objects;
    }
    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Promise<Entity>|Promise<null>}
      */

  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var primaryKey, filter, objects;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                primaryKey = this.entity.getPrimaryKey();
                filter = {
                  where: (0, _defineProperty2["default"])({}, primaryKey, id)
                };
                _context3.next = 4;
                return this.findAll(filter);

              case 4:
                objects = _context3.sent;

                if (!(objects.length > 0)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", objects[0]);

              case 9:
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function find(_x) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}|Criteria} filter
      * @throws {Error}
      * @return {{}|null}
      */

  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var filter,
            objects,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                filter = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                _context4.next = 3;
                return this.findAll(filter);

              case 3:
                objects = _context4.sent;

                if (!(objects.length > 0)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", objects[0]);

              case 8:
                return _context4.abrupt("return", null);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findOne() {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
    /**
    *
    * @param {{}|Criteria} filter
    * @param {number|null} page
    * @param {number|null} size
    * @return {Promise<EntityList>}
    */

  }, {
    key: "collect",
    value: function () {
      var _collect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var filter,
            page,
            size,
            filterForCounting,
            associatedKey,
            totalData,
            result,
            entityList,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                filter = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                page = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 1;
                size = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
                filterForCounting = filter instanceof _Criteria["default"] ? filter : _objectSpread({}, filter);

                if (size == null) {
                  size = _Collection["default"].numberOfDataReturned();
                }

                associatedKey = {};
                totalData = 0;
                ;
                _context5.next = 10;
                return this.fetch(filter, [], associatedKey, page, size);

              case 10:
                result = _context5.sent;
                entityList = new _EntityList["default"](result);
                _context5.next = 14;
                return this.count(filterForCounting);

              case 14:
                totalData = _context5.sent;

                if (size > totalData) {
                  size = totalData;
                }

                entityList.setTotal(totalData);
                entityList.setPage(page);
                entityList.setSize(size);
                entityList.setListOf(this.entity.name);
                entityList.setAssociatedKey(associatedKey);
                return _context5.abrupt("return", entityList);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function collect() {
        return _collect.apply(this, arguments);
      }

      return collect;
    }()
    /**
     * Count of data from database
    * @param {{}|Criteria} filter
     * @return {number}
     */

  }, {
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var filter,
            result,
            counter,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                filter = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};

                if (filter instanceof _Criteria["default"]) {
                  filter = filter.getFilter();
                }

                this.setFilter(filter);
                _context6.next = 5;
                return this.db.count({
                  count: '*'
                });

              case 5:
                result = _context6.sent;
                counter = result[0].count;
                this.db.clear('select').clear('where').clear('join');
                return _context6.abrupt("return", counter);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }]);
  return Repository;
}();

var _default = Repository;
exports["default"] = _default;