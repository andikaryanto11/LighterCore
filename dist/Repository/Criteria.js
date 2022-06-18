"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _where = /*#__PURE__*/new WeakMap();

var _whereNot = /*#__PURE__*/new WeakMap();

var _orWhere = /*#__PURE__*/new WeakMap();

var _whereIn = /*#__PURE__*/new WeakMap();

var _like = /*#__PURE__*/new WeakMap();

var _orLike = /*#__PURE__*/new WeakMap();

var _group = /*#__PURE__*/new WeakMap();

var _order = /*#__PURE__*/new WeakMap();

var _page = /*#__PURE__*/new WeakMap();

var _size = /*#__PURE__*/new WeakMap();

/**
 * @class Criteria
 */
var Criteria = /*#__PURE__*/function () {
  function Criteria() {
    (0, _classCallCheck2["default"])(this, Criteria);

    _classPrivateFieldInitSpec(this, _where, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _whereNot, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _orWhere, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _whereIn, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _like, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _orLike, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _group, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _order, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _page, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });
  }

  (0, _createClass2["default"])(Criteria, [{
    key: "where",
    value:
    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    function where(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _where, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _where)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */

  }, {
    key: "whereNot",
    value: function whereNot(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _whereNot, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _whereNot)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
    *
    * @param {string} key
    * @param {[]} value
    * @return {Query}
    */

  }, {
    key: "whereIn",
    value: function whereIn(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _whereIn, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _whereIn)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Query}
    */

  }, {
    key: "orWhere",
    value: function orWhere(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _orWhere, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _orWhere)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */

  }, {
    key: "like",
    value: function like(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _like, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _like)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */

  }, {
    key: "orLike",
    value: function orLike(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _orLike, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _orLike)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Query}
    */

  }, {
    key: "order",
    value: function order(key, value) {
      (0, _classPrivateFieldSet2["default"])(this, _order, _objectSpread(_objectSpread({}, (0, _classPrivateFieldGet2["default"])(this, _order)), {}, (0, _defineProperty2["default"])({}, key, value)));
      return this;
    }
    /**
    *
    * @param {number} page
    * @param {any} size
    * @return {Query}
    */

  }, {
    key: "limit",
    value: function limit(page, size) {
      (0, _classPrivateFieldSet2["default"])(this, _page, page);
      (0, _classPrivateFieldSet2["default"])(this, _size, size);
      return this;
    }
    /**
     * Get criteria filter for repository
     * @return {{}}
     */

  }, {
    key: "getFilter",
    value: function getFilter() {
      return {
        where: (0, _classPrivateFieldGet2["default"])(this, _where),
        whereIn: (0, _classPrivateFieldGet2["default"])(this, _whereIn),
        whereNot: (0, _classPrivateFieldGet2["default"])(this, _whereNot),
        orWhere: (0, _classPrivateFieldGet2["default"])(this, _orWhere),
        like: (0, _classPrivateFieldGet2["default"])(this, _like),
        orLike: (0, _classPrivateFieldGet2["default"])(this, _orLike),
        order: (0, _classPrivateFieldGet2["default"])(this, _order),
        page: (0, _classPrivateFieldGet2["default"])(this, _page),
        size: (0, _classPrivateFieldGet2["default"])(this, _size)
      };
    }
  }]);
  return Criteria;
}();

var _default = Criteria;
exports["default"] = _default;