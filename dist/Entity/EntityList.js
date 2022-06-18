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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Collection2 = _interopRequireDefault(require("../Utilities/Collection"));

var _EntityLooper = _interopRequireDefault(require("./EntityLooper"));

var _Symbol$iterator;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

_Symbol$iterator = Symbol.iterator;

/**
 * @class EntityList
 */
var EntityList = /*#__PURE__*/function (_Collection) {
  (0, _inherits2["default"])(EntityList, _Collection);

  var _super = _createSuper(EntityList);

  function EntityList() {
    var _this;

    (0, _classCallCheck2["default"])(this, EntityList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "listOf", '');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "associatedKey", []);
    return _this;
  }

  (0, _createClass2["default"])(EntityList, [{
    key: "setListOf",
    value:
    /**
     *
     * @param {string} listOf
     */
    function setListOf(listOf) {
      this.listOf = listOf;
    }
    /**
     *
     * @return {string}
     */

  }, {
    key: "getListOf",
    value: function getListOf() {
      return this.listOf;
    }
    /**
    *
    * @param {[]} associatedKey
    * @return {EntityList}
    */

  }, {
    key: "setAssociatedKey",
    value: function setAssociatedKey(associatedKey) {
      this.associatedKey = associatedKey;
      return this;
    }
    /**
    *
    * @return {[]}
    */

  }, {
    key: "getAssociatedKey",
    value: function getAssociatedKey() {
      return this.associatedKey;
    }
    /**
     * Convert each entity in collection to json
     * @return {array}
     */

  }, {
    key: "eachJson",
    value: function () {
      var _eachJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var newItems, _iterator, _step, item;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newItems = [];
                _iterator = _createForOfIteratorHelper(this.items);
                _context.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context.next = 13;
                  break;
                }

                item = _step.value;
                _context.t0 = newItems;
                _context.next = 9;
                return item.toJson();

              case 9:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 11:
                _context.next = 4;
                break;

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t2 = _context["catch"](2);

                _iterator.e(_context.t2);

              case 18:
                _context.prev = 18;

                _iterator.f();

                return _context.finish(18);

              case 21:
                ;
                return _context.abrupt("return", newItems);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15, 18, 21]]);
      }));

      function eachJson() {
        return _eachJson.apply(this, arguments);
      }

      return eachJson;
    }()
    /**
     *
     * @return {{}}
     */

  }, {
    key: _Symbol$iterator,
    value: function value() {
      var index = 0;
      return {
        instance: this,
        next: function next() {
          var looper = _EntityLooper["default"].getInstance(this.instance.getListOf());

          if (!looper.hasEntityList()) {
            looper.setEntityList(this.instance);
          }

          var lastIndex = this.instance.items.length;
          looper.setIsLastIndex(index == lastIndex);
          var result = {
            value: this.instance.items[index],
            done: index == lastIndex
          };
          index++;
          return result;
        }
      };
    }
  }]);
  return EntityList;
}(_Collection2["default"]);

var _default = EntityList;
exports["default"] = _default;