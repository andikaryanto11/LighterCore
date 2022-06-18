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

var _ORM = _interopRequireDefault(require("../Database/ORM"));

var _Repository = _interopRequireDefault(require("../Repository/Repository"));

var _config = _interopRequireDefault(require("../../../config"));

var _Orm = _interopRequireDefault(require("../../Orm/Common/Orm"));

var _EntityLooper = _interopRequireDefault(require("./EntityLooper"));

var _PlainObject = _interopRequireDefault(require("../Libraries/PlainObject"));

var _DateFormat = _interopRequireDefault(require("../Libraries/DateFormat"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class Entiry
 */
var Entity = /*#__PURE__*/function () {
  /**
   *
   */
  function Entity() {
    (0, _classCallCheck2["default"])(this, Entity);
    (0, _defineProperty2["default"])(this, "constrains", {});
    (0, _defineProperty2["default"])(this, "rules", {});
    var handler = {
      get: function get(target, prop, receiver) {
        var caller = prop.substring(0, 3);
        var property = prop.substring(3, prop.length);

        if (caller == 'get') {
          var field = target.constructor.getProps()[property];

          if (field && !field.isPrimitive) {
            var type = require(_config["default"].sourcePath + field.type)["default"];

            var keyValue = target.constrains[field.foreignKey];
            var originalMethod = target[prop];

            var primaryKey = _ORM["default"].getPrimaryKey(type.name);

            return /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var result,
                  looper,
                  entitylist,
                  param,
                  entities,
                  items,
                  _iterator,
                  _step,
                  entity,
                  getFn,
                  pkValue,
                  _result,
                  itemOfLooper,
                  _keyValue,
                  repo,
                  targetProps,
                  primaryKeyValue,
                  foreignKey,
                  _param,
                  _repo,
                  _repo2,
                  _len,
                  args,
                  _key,
                  returnedData,
                  _args = arguments;

              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      result = target[prop]();

                      if (!(result != undefined)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", result);

                    case 3:
                      if (!(field.relationType == _Orm["default"].ONE_TO_MANY)) {
                        _context.next = 30;
                        break;
                      }

                      looper = _EntityLooper["default"].getInstance(target.constructor.name);

                      if (!looper.hasEntityList()) {
                        _context.next = 23;
                        break;
                      }

                      entitylist = looper.getEntityList();

                      if (!_PlainObject["default"].isEmpty(looper.getItems())) {
                        _context.next = 16;
                        break;
                      }

                      param = {
                        whereIn: (0, _defineProperty2["default"])({}, primaryKey, entitylist.getAssociatedKey()[field.foreignKey])
                      };
                      _context.next = 11;
                      return new _Repository["default"](type).findAll(param);

                    case 11:
                      entities = _context.sent;
                      items = {};
                      _iterator = _createForOfIteratorHelper(entities);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          entity = _step.value;
                          getFn = 'get' + primaryKey;
                          pkValue = entity[getFn]();
                          items = _objectSpread(_objectSpread({}, items), {}, (0, _defineProperty2["default"])({}, pkValue, entity));
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      looper.setItems(items);

                    case 16:
                      _result = null;
                      itemOfLooper = looper.getItems();

                      if (!_PlainObject["default"].isEmpty(itemOfLooper)) {
                        if (!_PlainObject["default"].isEmpty(target.constrains)) {
                          _keyValue = target.constrains[field.foreignKey];

                          if (_keyValue in itemOfLooper) {
                            _result = itemOfLooper[_keyValue];
                          }
                        }
                      }

                      if (looper.isLastIndex()) {
                        looper.clean();
                      }

                      if (_result != null) {
                        target['set' + property](_result);
                      }

                      _context.next = 28;
                      break;

                    case 23:
                      if (!keyValue) {
                        _context.next = 28;
                        break;
                      }

                      _context.next = 26;
                      return new _Repository["default"](type).find(keyValue);

                    case 26:
                      repo = _context.sent;
                      target['set' + property](repo);

                    case 28:
                      _context.next = 47;
                      break;

                    case 30:
                      if (!(field.relationType == _Orm["default"].MANY_TO_ONE)) {
                        _context.next = 42;
                        break;
                      }

                      targetProps = _ORM["default"].getProps(type.name);
                      primaryKeyValue = target['get' + primaryKey]();
                      foreignKey = targetProps[field.mappedBy].foreignKey;

                      if (!primaryKeyValue) {
                        _context.next = 40;
                        break;
                      }

                      _param = {
                        where: (0, _defineProperty2["default"])({}, foreignKey, primaryKeyValue)
                      };
                      _context.next = 38;
                      return new _Repository["default"](type).collect(_param);

                    case 38:
                      _repo = _context.sent;
                      target['set' + property](_repo);

                    case 40:
                      _context.next = 47;
                      break;

                    case 42:
                      if (!keyValue) {
                        _context.next = 47;
                        break;
                      }

                      _context.next = 45;
                      return new _Repository["default"](type).find(keyValue);

                    case 45:
                      _repo2 = _context.sent;
                      target['set' + property](_repo2);

                    case 47:
                      for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = _args[_key];
                      }

                      _context.next = 50;
                      return originalMethod.apply(this, args);

                    case 50:
                      returnedData = _context.sent;

                      if (!(returnedData == undefined)) {
                        _context.next = 53;
                        break;
                      }

                      return _context.abrupt("return", null);

                    case 53:
                      return _context.abrupt("return", returnedData);

                    case 54:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }

        return target[prop];
      }
    };
    return new Proxy(this, handler);
  }
  /**
   * Get all props name
   * @return {[]}
   */


  (0, _createClass2["default"])(Entity, [{
    key: "toJson",
    value:
    /**
     *
     * @return {Promise<{}>}
     */
    function () {
      var _toJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var object, entity, getProps, _i, _Object$entries, _Object$entries$_i, key, value, getProp, propValue, related, primaryKey, getPrimary, pkValue;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                object = {};
                entity = this;
                getProps = _ORM["default"].getProps(entity.constructor.name);
                _i = 0, _Object$entries = Object.entries(getProps);

              case 4:
                if (!(_i < _Object$entries.length)) {
                  _context2.next = 20;
                  break;
                }

                _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                getProp = 'get' + key;
                propValue = entity[getProp]();

                if (!value.isPrimitive) {
                  _context2.next = 13;
                  break;
                }

                if (value.rule != undefined && value.rule != null) {
                  this.setRule(key, value.rule);
                }

                if (value.type == 'datetime') {
                  if (propValue) {
                    object[key] = _DateFormat["default"].databaseDate(propValue);
                  } else {
                    object[key] = null;
                  }
                } else {
                  object[key] = propValue == undefined ? null : propValue;
                }

                _context2.next = 17;
                break;

              case 13:
                _context2.next = 15;
                return propValue;

              case 15:
                related = _context2.sent;

                if (value.relationType == _Orm["default"].ONE_TO_MANY) {
                  if (value.rule != undefined && value.rule != null) {
                    this.setRule(value.foreignKey, value.rule);
                  }

                  if (related) {
                    primaryKey = _ORM["default"].getPrimaryKey(related.constructor.name);
                    getPrimary = 'get' + primaryKey;
                    pkValue = related[getPrimary]();
                    object[value.foreignKey] = pkValue;
                  } else {
                    object[value.foreignKey] = null;
                  }
                } else if (value.relationType == _Orm["default"].ONE_TO_ONE) {}

              case 17:
                _i++;
                _context2.next = 4;
                break;

              case 20:
                return _context2.abrupt("return", object);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function toJson() {
        return _toJson.apply(this, arguments);
      }

      return toJson;
    }()
    /**
     * Set rule to validate objec of e entity
     * @param {string} key
     * @param {string} rule
     * @return {Entity}
     */

  }, {
    key: "setRule",
    value: function setRule(key, rule) {
      this.rules = _objectSpread(_objectSpread({}, this.rules), {}, (0, _defineProperty2["default"])({}, key, rule));
      return this;
    }
    /**
     * Get rules
     * @return {[]}
     */

  }, {
    key: "getRules",
    value: function getRules() {
      return this.rules;
    }
  }], [{
    key: "getProps",
    value: function getProps() {
      return _ORM["default"].getProps(this.name);
    }
    /**
     * get Table Name
     * @return {string}
     */

  }, {
    key: "getTable",
    value: function getTable() {
      return _ORM["default"].getTable(this.name);
    }
    /**
     * GetP primary key field
     * @return {string}
     */

  }, {
    key: "getPrimaryKey",
    value: function getPrimaryKey() {
      return _ORM["default"].getPrimaryKey(this.name);
    }
    /**
     * Get select columns
     * @return {{}}
     */

  }, {
    key: "getSelectColumns",
    value: function getSelectColumns() {
      var selectedColumn = [];
      var colums = this.getProps();

      for (var _i2 = 0, _Object$entries2 = Object.entries(colums); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        if (value.isPrimitive) {
          selectedColumn.push(this.getTable() + '.' + key);
        } else {
          if (value.relationType == _Orm["default"].ONE_TO_MANY) {
            selectedColumn.push(this.getTable() + '.' + value.foreignKey);
          }
        }
      }

      return selectedColumn;
    }
  }]);
  return Entity;
}();

var _default = Entity;
exports["default"] = _default;