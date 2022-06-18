"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _ModelError = _interopRequireDefault(require("../../App/Errors/ModelError.js"));

var _DbConnection = _interopRequireDefault(require("../Database/Connection/DbConnection.js"));

var _Request = _interopRequireDefault(require("../Http/Request.js"));

var _Cast = _interopRequireDefault(require("../Libraries/Cast.js"));

var _PlainObject = _interopRequireDefault(require("../Libraries/PlainObject.js"));

var _CollectionModel = _interopRequireDefault(require("./CollectionModel.js"));

var _DatatablesModel = _interopRequireDefault(require("./DatatablesModel.js"));

var _PagingModel = _interopRequireDefault(require("./PagingModel.js"));

var _ValidatorModel = _interopRequireDefault(require("./ValidatorModel.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _table = /*#__PURE__*/new WeakMap();

var _columns = /*#__PURE__*/new WeakMap();

var _primaryKey = /*#__PURE__*/new WeakMap();

var _db = /*#__PURE__*/new WeakMap();

var _cast = /*#__PURE__*/new WeakMap();

var _relatedClass = /*#__PURE__*/new WeakMap();

/**
 * @class Model
 */
var Model = /*#__PURE__*/function () {
  /**
   *
   * @param {string} table
   * @param {string} primaryKey
   * @param {{}} cast
   */
  function Model(table, primaryKey) {
    var cast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2["default"])(this, Model);

    _classPrivateFieldInitSpec(this, _table, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _columns, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _primaryKey, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _db, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _cast, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _relatedClass, {
      writable: true,
      value: []
    });

    (0, _classPrivateFieldSet2["default"])(this, _table, table);
    (0, _classPrivateFieldSet2["default"])(this, _primaryKey, primaryKey);
    (0, _classPrivateFieldSet2["default"])(this, _db, _DbConnection["default"].table((0, _classPrivateFieldGet2["default"])(this, _table)));
    (0, _classPrivateFieldSet2["default"])(this, _cast, cast);
  }
  /**
   * Parse data from request to model
   */


  (0, _createClass2["default"])(Model, [{
    key: "parseFromRequest",
    value: function parseFromRequest() {
      var request = _Request["default"].getInstance().getRequest().body;

      for (var _i = 0, _Object$entries = Object.entries(request); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (this.getPropsName().includes(key)) {
          this[key] = value;
        }
      }
    }
    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {{}|null}
      */

  }, {
    key: "setFilter",
    value:
    /**
      * Set filter before fecthing data from database
      * @param {{}} filter
      * @return {this}
      */
    function setFilter() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (filter.join != undefined) {
        for (var _i2 = 0, _Object$entries2 = Object.entries(filter.join); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];

          if (value.type == undefined || value.type.toUpperCase() == 'INNER') {
            (0, _classPrivateFieldGet2["default"])(this, _db).innerJoin(key, value.key[0], value.key[1]);
          } else {
            if (value.type.toUpperCase() == 'LEFT') {
              (0, _classPrivateFieldGet2["default"])(this, _db).leftJoin(key, value.key[0], value.key[1]);
            }
          }
        }
      }

      if (filter.where != undefined) {
        (0, _classPrivateFieldGet2["default"])(this, _db).where(filter.where);
      }

      if (filter.whereNot != undefined) {
        (0, _classPrivateFieldGet2["default"])(this, _db).whereNot(filter.whereNot);
      }

      if (filter.whereIn != undefined) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(filter.whereIn); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = (0, _slicedToArray2["default"])(_Object$entries3[_i3], 2),
              _key = _Object$entries3$_i[0],
              _value = _Object$entries3$_i[1];

          (0, _classPrivateFieldGet2["default"])(this, _db).whereIn(_key, _value);
        }
      }

      if (filter.like != undefined) {
        for (var _i4 = 0, _Object$entries4 = Object.entries(filter.like); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = (0, _slicedToArray2["default"])(_Object$entries4[_i4], 2),
              _key2 = _Object$entries4$_i[0],
              _value2 = _Object$entries4$_i[1];

          (0, _classPrivateFieldGet2["default"])(this, _db).where(_key2, 'like', "%".concat(_value2, "%"));
        }
      }

      if (filter.orLike != undefined) {
        for (var _i5 = 0, _Object$entries5 = Object.entries(filter.whereIn); _i5 < _Object$entries5.length; _i5++) {
          var _Object$entries5$_i = (0, _slicedToArray2["default"])(_Object$entries5[_i5], 2),
              _key3 = _Object$entries5$_i[0],
              _value3 = _Object$entries5$_i[1];

          (0, _classPrivateFieldGet2["default"])(this, _db).orWhere(_key3, 'like', "%".concat(_value3, "%"));
        }
      }

      if (filter.group != undefined) {
        if (filter.group.orLike != undefined) {
          (0, _classPrivateFieldGet2["default"])(this, _db).where(function () {
            var i = 0;

            for (var _i6 = 0, _Object$entries6 = Object.entries(filter.group.orLike); _i6 < _Object$entries6.length; _i6++) {
              var _Object$entries6$_i = (0, _slicedToArray2["default"])(_Object$entries6[_i6], 2),
                  _key4 = _Object$entries6$_i[0],
                  _value4 = _Object$entries6$_i[1];

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
        for (var _i7 = 0, _Object$entries7 = Object.entries(filter.order); _i7 < _Object$entries7.length; _i7++) {
          var _Object$entries7$_i = (0, _slicedToArray2["default"])(_Object$entries7[_i7], 2),
              _key5 = _Object$entries7$_i[0],
              _value5 = _Object$entries7$_i[1];

          (0, _classPrivateFieldGet2["default"])(this, _db).orderBy(_key5, _value5);
        }
      }

      if (filter.page != undefined && filter.size != undefined) {
        var offset = filter.size * (filter.page - 1);
        (0, _classPrivateFieldGet2["default"])(this, _db).limit(filter.size).offset(offset);
      }

      return this;
    }
    /**
      * Fetch the data from database
      * @param {{}} filter
      * @param {[]} columns
      */

  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var filter,
            columns,
            withRelatedData,
            results,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                columns = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                (0, _classPrivateFieldSet2["default"])(this, _columns, this.getSelectColumns());

                if (columns.length > 0) {
                  (0, _classPrivateFieldSet2["default"])(this, _columns, columns);
                }

                (0, _classPrivateFieldGet2["default"])(this, _db).column((0, _classPrivateFieldGet2["default"])(this, _columns));
                this.setFilter(filter);
                withRelatedData = null;
                _context.next = 9;
                return (0, _classPrivateFieldGet2["default"])(this, _db);

              case 9:
                results = _context.sent;

                if (!((0, _classPrivateFieldGet2["default"])(this, _relatedClass).length > 0)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return this.fetchRelatedData(results);

              case 13:
                withRelatedData = _context.sent;

              case 14:
                return _context.abrupt("return", this.setToEntity(results, withRelatedData));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
      * Set to instance of current class
      * @param {[]} results
      * @param {any} withRelatedData
      */

  }, {
    key: "setToEntity",
    value: function () {
      var _setToEntity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(results) {
        var _this = this;

        var withRelatedData,
            objects,
            newClassName,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                withRelatedData = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                objects = [];
                newClassName = this.constructor;
                results.forEach(function (e, i) {
                  var obj = new newClassName();

                  var _loop = function _loop() {
                    var _Object$entries8$_i = (0, _slicedToArray2["default"])(_Object$entries8[_i8], 2),
                        key = _Object$entries8$_i[0],
                        value = _Object$entries8$_i[1];

                    var found = Object.keys((0, _classPrivateFieldGet2["default"])(_this, _cast)).find(function (keys) {
                      return keys == key;
                    });

                    if (found) {
                      obj[key] = _Cast["default"].to(value, (0, _classPrivateFieldGet2["default"])(_this, _cast)[key]);
                    } else {
                      obj[key] = value;
                    }

                    if (typeof obj['_change_' + key] === 'function') {
                      obj['_change_' + key]();
                    }
                  };

                  for (var _i8 = 0, _Object$entries8 = Object.entries(e); _i8 < _Object$entries8.length; _i8++) {
                    _loop();
                  }

                  if (withRelatedData != null) {
                    var _iterator = _createForOfIteratorHelper(withRelatedData),
                        _step;

                    try {
                      var _loop2 = function _loop2() {
                        var relatedData = _step.value;

                        var findRelated = function findRelated(item) {
                          return obj[relatedData.ForeignKey] == item[item.getPrimaryKey()];
                        };

                        var relatedDataFound = relatedData.Data.where(findRelated);
                        obj[relatedData.ClassName] = relatedDataFound.length == 0 ? null : relatedDataFound[0];
                      };

                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        _loop2();
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  objects.push(obj);
                });
                return _context2.abrupt("return", objects);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setToEntity(_x) {
        return _setToEntity.apply(this, arguments);
      }

      return setToEntity;
    }()
    /**
     * Get Related Data as array, used with "with" function for Eager Load
     * @param {array} results of object
     */

  }, {
    key: "fetchRelatedData",
    value: function () {
      var _fetchRelatedData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(results) {
        var resultRelatedData, collectionResult, fieldValues, _iterator2, _step2, related, instance, nameSpace, className, params, fetchedData, result;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                resultRelatedData = [];
                collectionResult = new _CollectionModel["default"](results);
                fieldValues = null;
                _iterator2 = _createForOfIteratorHelper((0, _classPrivateFieldGet2["default"])(this, _relatedClass));
                _context3.prev = 4;

                _iterator2.s();

              case 6:
                if ((_step2 = _iterator2.n()).done) {
                  _context3.next = 20;
                  break;
                }

                related = _step2.value;
                instance = new related.ClassName();
                nameSpace = related.ClassName;
                className = instance.constructor.name;
                fieldValues = collectionResult.chunkUnique(related.ForeignKey);
                params = {
                  whereIn: (0, _defineProperty2["default"])({}, instance.getPrimaryKey(), fieldValues)
                };
                _context3.next = 15;
                return nameSpace.collect(params);

              case 15:
                fetchedData = _context3.sent;
                result = {
                  ForeignKey: related['ForeignKey'],
                  ClassName: className,
                  Data: fetchedData
                };
                resultRelatedData.push(result);

              case 18:
                _context3.next = 6;
                break;

              case 20:
                _context3.next = 25;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](4);

                _iterator2.e(_context3.t0);

              case 25:
                _context3.prev = 25;

                _iterator2.f();

                return _context3.finish(25);

              case 28:
                return _context3.abrupt("return", resultRelatedData);

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 22, 25, 28]]);
      }));

      function fetchRelatedData(_x2) {
        return _fetchRelatedData.apply(this, arguments);
      }

      return fetchRelatedData;
    }()
    /**
      * Set to plain object
      * @return {{}}
      */

  }, {
    key: "toJson",
    value: function toJson() {
      var json = {};

      for (var _i9 = 0, _Object$entries9 = Object.entries(this); _i9 < _Object$entries9.length; _i9++) {
        var _Object$entries9$_i = (0, _slicedToArray2["default"])(_Object$entries9[_i9], 2),
            key = _Object$entries9$_i[0],
            value = _Object$entries9$_i[1];

        json[key] = value;
      }

      return json;
    }
    /**
      * Save data when your primary key of instance is not set otherwise will update
      * @param {*} transaction
      * @param {boolean} isIncrement
      */

  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var transaction,
            isIncrement,
            obj,
            primaryKey,
            table,
            result,
            id,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                transaction = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
                isIncrement = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
                obj = this;
                primaryKey = (0, _classPrivateFieldGet2["default"])(obj, _primaryKey);
                table = (0, _classPrivateFieldGet2["default"])(obj, _table);
                result = null;

                if (!(obj[primaryKey] == null)) {
                  _context4.next = 17;
                  break;
                }

                if (transaction != null) {
                  result = _DbConnection["default"].transacting(transaction).into(table).insert(obj);
                } else {
                  result = _DbConnection["default"].into(table).insert(obj);
                }

                _context4.next = 10;
                return result;

              case 10:
                id = _context4.sent;
                this[primaryKey] = id[0];

                if (!(id[0] > 0)) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return", true);

              case 14:
                return _context4.abrupt("return", false);

              case 17:
                if (transaction != null) {
                  result = _DbConnection["default"].table(table).transacting(transaction).where(primaryKey, obj[primaryKey]).update(obj);
                } else {
                  result = _DbConnection["default"].table(table).where(primaryKey, obj[primaryKey]).update(obj);
                }

                _context4.next = 20;
                return result;

              case 20:
                return _context4.abrupt("return", true);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /**
      * Delete data from current instance
      * @param {*} transaction
      */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var transaction,
            obj,
            primaryKey,
            table,
            ret,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                transaction = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
                obj = this;
                primaryKey = (0, _classPrivateFieldGet2["default"])(obj, _primaryKey);
                table = (0, _classPrivateFieldGet2["default"])(obj, _table);
                ret = null;

                if (!(transaction != null)) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 8;
                return _DbConnection["default"].transacting(transaction).table(table).where(primaryKey, obj[primaryKey]).del();

              case 8:
                ret = _context5.sent;
                _context5.next = 14;
                break;

              case 11:
                _context5.next = 13;
                return _DbConnection["default"].table(table).where(primaryKey, obj[primaryKey]).del();

              case 13:
                ret = _context5.sent;

              case 14:
                if (!(ret > 0)) {
                  _context5.next = 16;
                  break;
                }

                return _context5.abrupt("return", true);

              case 16:
                return _context5.abrupt("return", false);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get parent related table data
     */

  }, {
    key: "hasOne",
    value: function () {
      var _hasOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                filter = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                result = null;

                if (!(this[foreignKey] != null)) {
                  _context6.next = 15;
                  break;
                }

                if (!_PlainObject["default"].isEmpty(filter)) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 6;
                return relatedEloquent.find(this[foreignKey]);

              case 6:
                result = _context6.sent;
                return _context6.abrupt("return", result);

              case 10:
                if (filter.where != undefined) {
                  filter.where[foreignKey] = this[foreignKey];
                } else {
                  filter.where = (0, _defineProperty2["default"])({}, foreignKey, this[foreignKey]);
                }

                _context6.next = 13;
                return relatedEloquent.findOne(filter);

              case 13:
                result = _context6.sent;
                return _context6.abrupt("return", result);

              case 15:
                return _context6.abrupt("return", null);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function hasOne(_x3, _x4) {
        return _hasOne.apply(this, arguments);
      }

      return hasOne;
    }()
    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get parent related table data
     */

  }, {
    key: "hasOneOrNew",
    value: function () {
      var _hasOneOrNew = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                filter = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
                _context7.next = 3;
                return this.hasOne(relatedEloquent, foreignKey, filter);

              case 3:
                result = _context7.sent;

                if (!(result != null)) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return", result);

              case 6:
                return _context7.abrupt("return", new relatedEloquent());

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function hasOneOrNew(_x5, _x6) {
        return _hasOneOrNew.apply(this, arguments);
      }

      return hasOneOrNew;
    }()
    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     * @throws {ModelError}
     *
     * Get parent related table data
     */

  }, {
    key: "hasOneOrFail",
    value: function () {
      var _hasOneOrFail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                filter = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
                _context8.next = 3;
                return this.hasOne(relatedEloquent, foreignKey, filter);

              case 3:
                result = _context8.sent;

                if (!(result != null)) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", result);

              case 6:
                throw new _ModelError["default"]('Data not Found');

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function hasOneOrFail(_x7, _x8) {
        return _hasOneOrFail.apply(this, arguments);
      }

      return hasOneOrFail;
    }()
    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */

  }, {
    key: "hasMany",
    value: function () {
      var _hasMany = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(relatedEloquent, foreignKey) {
        var filter,
            primaryKey,
            result,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                filter = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                primaryKey = (0, _classPrivateFieldGet2["default"])(this, _primaryKey);

                if (!(this[primaryKey] != null)) {
                  _context9.next = 9;
                  break;
                }

                if (filter.where != undefined) {
                  filter.where[foreignKey] = this[primaryKey];
                } else {
                  filter.where = (0, _defineProperty2["default"])({}, foreignKey, this[primaryKey]);
                }

                _context9.next = 6;
                return relatedEloquent.findAll(filter);

              case 6:
                result = _context9.sent;

                if (!(result.length > 0)) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt("return", result);

              case 9:
                return _context9.abrupt("return", null);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function hasMany(_x9, _x10) {
        return _hasMany.apply(this, arguments);
      }

      return hasMany;
    }()
    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     * @throws {ModelError}
     *
     * Get child related table data
     */

  }, {
    key: "hasManyOrFail",
    value: function () {
      var _hasManyOrFail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                filter = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
                _context10.next = 3;
                return this.hasMany(relatedEloquent, foreignKey, filter);

              case 3:
                result = _context10.sent;

                if (!(result != null)) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return", result);

              case 6:
                throw new _ModelError["default"]('Data List Not Found');

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function hasManyOrFail(_x11, _x12) {
        return _hasManyOrFail.apply(this, arguments);
      }

      return hasManyOrFail;
    }()
    /**
     * @param {Class} relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param {string} foreignKey key name of related Eloquent
     * @param {string} filter param to filter data
     *
     * Get child related table data
     */

  }, {
    key: "hasFirst",
    value: function () {
      var _hasFirst = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(relatedEloquent, foreignKey) {
        var filter,
            primaryKey,
            result,
            _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                filter = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : [];
                primaryKey = (0, _classPrivateFieldGet2["default"])(this, _primaryKey);

                if (!(this[primaryKey] != null)) {
                  _context11.next = 9;
                  break;
                }

                if (filter.where != undefined) {
                  filter.where[foreignKey] = this[primaryKey];
                } else {
                  filter.where = (0, _defineProperty2["default"])({}, foreignKey, this[primaryKey]);
                }

                _context11.next = 6;
                return relatedEloquent.findAll(filter);

              case 6:
                result = _context11.sent;

                if (!(result.length > 0)) {
                  _context11.next = 9;
                  break;
                }

                return _context11.abrupt("return", result[0]);

              case 9:
                return _context11.abrupt("return", null);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function hasFirst(_x13, _x14) {
        return _hasFirst.apply(this, arguments);
      }

      return hasFirst;
    }()
    /**
     * @param {Class} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */

  }, {
    key: "hasFirstOrNew",
    value: function () {
      var _hasFirstOrNew = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                filter = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : {};
                _context12.next = 3;
                return this.hasFirst(relatedEloquent, foreignKey, filter);

              case 3:
                result = _context12.sent;

                if (!(result != null)) {
                  _context12.next = 6;
                  break;
                }

                return _context12.abrupt("return", result);

              case 6:
                return _context12.abrupt("return", new relatedEloquent());

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function hasFirstOrNew(_x15, _x16) {
        return _hasFirstOrNew.apply(this, arguments);
      }

      return hasFirstOrNew;
    }()
    /**
     * @param {Class} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */

  }, {
    key: "hasFirstOrFail",
    value: function () {
      var _hasFirstOrFail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(relatedEloquent, foreignKey) {
        var filter,
            result,
            _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                filter = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : {};
                _context13.next = 3;
                return this.hasFirst(relatedEloquent, foreignKey, filter);

              case 3:
                result = _context13.sent;

                if (!(result != null)) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt("return", result);

              case 6:
                throw new _ModelError["default"]('Data Not Found');

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function hasFirstOrFail(_x17, _x18) {
        return _hasFirstOrFail.apply(this, arguments);
      }

      return hasFirstOrFail;
    }()
    /**
      *
      * @param {{}} rules
      * @param {{}} customError
      * @return {Validator}
      */

  }, {
    key: "validateRules",
    value: function validateRules(rules) {
      var customError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _ValidatorModel["default"].validate(this.toJson(), rules, customError);
    }
    /**
      * Get object datatable
      * @param {{}} filter
      * @param {string} method
      * @return {DatatablesModel}
      */

  }, {
    key: "isSaved",
    value:
    /**
      * Check data wether is saved or not.
      * If your table has no auto increment on it then this method is not considered to be valid.
      * This method is valid when your table has auto incerement primary key
      * @return {boolean}
      */
    function isSaved() {
      return this[(0, _classPrivateFieldGet2["default"])(this, _primaryKey)] != null;
    }
    /**
      * Get object paging
      * @param {{}} filter
      * @param {number} page
      * @param {number} size
      * @param {number} showedPage
      * @param {{}} queryParams
      * @return {Promise<{}>}
      */

  }, {
    key: "getPropsName",
    value:
    /**
      * Get array of props name
      * @return {string[]}
      */
    function getPropsName() {
      return Object.getOwnPropertyNames(this);
    }
    /**
      * get primarykey
      * @return {string}
      */

  }, {
    key: "getPrimaryKey",
    value: function getPrimaryKey() {
      return (0, _classPrivateFieldGet2["default"])(this, _primaryKey);
    }
    /**
      * Get table name
      * @return {string}
      */

  }, {
    key: "getTable",
    value: function getTable() {
      return (0, _classPrivateFieldGet2["default"])(this, _table);
    }
    /**
      * extends class traits
      * @param {*} trait
      * @param {{}} options
      * @return {void}
      */

  }, {
    key: "addTrait",
    value: function addTrait(trait) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var newTrait = new trait();
      newTrait.register(this.constructor, options);
    }
    /**
      * Get select column of current table
      * @return {[]}
      */

  }, {
    key: "getSelectColumns",
    value: function getSelectColumns() {
      var selectColumns = [];

      var _iterator3 = _createForOfIteratorHelper(this.getPropsName()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var column = _step3.value;
          selectColumns.push(this.getTable() + '.' + column);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return selectColumns;
    }
  }], [{
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id) {
        var instance, filter, objects;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                instance = new this();
                filter = {
                  where: (0, _defineProperty2["default"])({}, (0, _classPrivateFieldGet2["default"])(instance, _primaryKey), id)
                };
                _context14.next = 4;
                return this.findAll(filter);

              case 4:
                objects = _context14.sent;

                if (!(objects.length > 0)) {
                  _context14.next = 9;
                  break;
                }

                return _context14.abrupt("return", objects[0]);

              case 9:
                return _context14.abrupt("return", null);

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function find(_x19) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
    /**
      * Get one data from database by id primary key, If Data not found will reeturn new intance
      * @param {number|string} id
      * @throws {Error}
      * @return {object}
      */

  }, {
    key: "findOrNew",
    value: function () {
      var _findOrNew = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(id) {
        var instance, object;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                instance = new this();
                _context15.next = 3;
                return this.find(id);

              case 3:
                object = _context15.sent;

                if (!(object != null)) {
                  _context15.next = 8;
                  break;
                }

                return _context15.abrupt("return", object);

              case 8:
                return _context15.abrupt("return", instance);

              case 9:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function findOrNew(_x20) {
        return _findOrNew.apply(this, arguments);
      }

      return findOrNew;
    }()
    /**
      * Get one data from database by id primary key, If Data not found will Throw Error
      * @param {number|string} id
      * @throws {Error}
      * @return {object}
      */

  }, {
    key: "findOrFail",
    value: function () {
      var _findOrFail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(id) {
        var object;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.find(id);

              case 2:
                object = _context16.sent;

                if (!(object != null)) {
                  _context16.next = 7;
                  break;
                }

                return _context16.abrupt("return", object);

              case 7:
                throw new _ModelError["default"]('Data not found');

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function findOrFail(_x21) {
        return _findOrFail.apply(this, arguments);
      }

      return findOrFail;
    }()
    /**
      * Get one data from database, If Data not found will return null
      * @param {{}} filter
      * @throws {Error}
      * @return {object|null}
      */

  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
        var filter,
            objects,
            _args17 = arguments;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                filter = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : {};
                _context17.next = 3;
                return this.findAll(filter);

              case 3:
                objects = _context17.sent;

                if (!(objects.length > 0)) {
                  _context17.next = 8;
                  break;
                }

                return _context17.abrupt("return", objects[0]);

              case 8:
                return _context17.abrupt("return", null);

              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function findOne() {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
    /**
      * Get one data from database, If Data not found will return new instance
      * @param {{}} filter
      * @throws {Error}
      * @return {object}
      */

  }, {
    key: "findOneOrNew",
    value: function () {
      var _findOneOrNew = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
        var filter,
            instance,
            object,
            _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                filter = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
                instance = new this();
                _context18.next = 4;
                return this.findOne(filter);

              case 4:
                object = _context18.sent;

                if (!(object != null)) {
                  _context18.next = 9;
                  break;
                }

                return _context18.abrupt("return", object);

              case 9:
                return _context18.abrupt("return", instance);

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function findOneOrNew() {
        return _findOneOrNew.apply(this, arguments);
      }

      return findOneOrNew;
    }()
    /**
      * Get one data from database, If Data not found will Throw Error
      * @param {{}} filter
      * @throws {Error}
      * @return {object}
      */

  }, {
    key: "findOneOrFail",
    value: function () {
      var _findOneOrFail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
        var filter,
            object,
            _args19 = arguments;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                filter = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : {};
                _context19.next = 3;
                return this.findOne(filter);

              case 3:
                object = _context19.sent;

                if (!(object != null)) {
                  _context19.next = 8;
                  break;
                }

                return _context19.abrupt("return", object);

              case 8:
                throw new _ModelError["default"]('Data not found');

              case 9:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function findOneOrFail() {
        return _findOneOrFail.apply(this, arguments);
      }

      return findOneOrFail;
    }()
    /**
      * Get all data from database
      * @param {{}} filter
      * @param {[]} columns
      */

  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
        var filter,
            columns,
            instance,
            _args20 = arguments;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                filter = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : {};
                columns = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : [];
                instance = new this();
                _context20.next = 5;
                return instance.fetch(filter, columns);

              case 5:
                return _context20.abrupt("return", _context20.sent);

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
    /**
      * Count reesult data from database
      * @param {{}} filter
      * @param {[]} columns
      * @return {number}
      */

  }, {
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
        var filter,
            columns,
            objects,
            _args21 = arguments;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                filter = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
                columns = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : [];
                _context21.next = 4;
                return this.findAll(filter, columns);

              case 4:
                objects = _context21.sent;
                return _context21.abrupt("return", objects.length);

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
    /**
      * Collect data from datatabse
      * @param {{}} filter
      * @return {Promise<CollectionModel>}
      */

  }, {
    key: "collect",
    value: function () {
      var _collect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22() {
        var filter,
            objects,
            _args22 = arguments;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                filter = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : {};
                _context22.next = 3;
                return this.findAll(filter);

              case 3:
                objects = _context22.sent;
                return _context22.abrupt("return", new _CollectionModel["default"](objects));

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function collect() {
        return _collect.apply(this, arguments);
      }

      return collect;
    }()
    /**
     * Eeager Load Query
     * @param {[]} relatedClasses
     * @return {object}
     */

  }, {
    key: "with",
    value: function _with(relatedClasses) {
      var instance = new this();

      var _iterator4 = _createForOfIteratorHelper(relatedClasses),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var relatedClass = _step4.value;
          (0, _classPrivateFieldGet2["default"])(instance, _relatedClass).push(relatedClass);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return instance;
    }
  }, {
    key: "datatables",
    value: function datatables() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
      return new _DatatablesModel["default"](this, filter, method);
    }
  }, {
    key: "paginate",
    value: function () {
      var _paginate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
        var filter,
            page,
            size,
            showedPage,
            queryParams,
            _args23 = arguments;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                filter = _args23.length > 0 && _args23[0] !== undefined ? _args23[0] : {};
                page = _args23.length > 1 && _args23[1] !== undefined ? _args23[1] : 1;
                size = _args23.length > 2 && _args23[2] !== undefined ? _args23[2] : 6;
                showedPage = _args23.length > 3 && _args23[3] !== undefined ? _args23[3] : 5;
                queryParams = _args23.length > 4 && _args23[4] !== undefined ? _args23[4] : {};
                _context23.next = 7;
                return new _PagingModel["default"](this, filter, page, size, showedPage, queryParams).fetch();

              case 7:
                return _context23.abrupt("return", _context23.sent);

              case 8:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function paginate() {
        return _paginate.apply(this, arguments);
      }

      return paginate;
    }()
  }]);
  return Model;
}();

var _default = Model;
exports["default"] = _default;