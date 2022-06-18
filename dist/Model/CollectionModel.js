"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _CollectionError = _interopRequireDefault(require("../Errors/CollectionError.js"));

var _Collection2 = _interopRequireDefault(require("../Utilities/Collection.js"));

var _Symbol$iterator;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _className = /*#__PURE__*/new WeakMap();

_Symbol$iterator = Symbol.iterator;

/**
 * @class CollectionModel
 */
var CollectionModel = /*#__PURE__*/function (_Collection) {
  (0, _inherits2["default"])(CollectionModel, _Collection);

  var _super = _createSuper(CollectionModel);

  /**
   *
   * @param {{}} items instance of object model
   */
  function CollectionModel(items) {
    var _this;

    (0, _classCallCheck2["default"])(this, CollectionModel);
    _this = _super.call(this, items);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _className, {
      writable: true,
      value: null
    });

    return _this;
  }
  /**
    *
    * @param {{}} item instance of object model
    * @return {CollectionModel}
    */


  (0, _createClass2["default"])(CollectionModel, [{
    key: "add",
    value: function add(item) {
      this.items.push(item);
      return this;
    }
    /**
      * find data with primary key data
      *
      * @param {int|string} id
      * @return {CollectionModel}
      */

  }, {
    key: "find",
    value: function find(id) {
      return this.filter(function (x) {
        return x[x.getPrimaryKey()] == id;
      });
    }
    /**
      *
      * @param {[]} ids
      * @return {this}
      */

  }, {
    key: "except",
    value: function except(ids) {
      if (!Array.isArray(ids)) {
        throw new _CollectionError["default"]('expect an array for ids');
      }

      return this.filter(function (x) {
        var found = ids.find(function (id) {
          return id == x[x.getPrimaryKey()];
        });
        return found == undefined;
      });
    }
    /**
      *
      * @param {string} columnName
      * @return {[]}
      */

  }, {
    key: "chunk",
    value: function chunk(columnName) {
      var chunk = [];
      this.items.forEach(function (item, i) {
        if (columnName in item) {
          chunk.push(item[columnName]);
        }
      });
      return chunk;
    }
    /**
      *
      * @param {string} columnName
      * @return {[]}
      */

  }, {
    key: "chunkUnique",
    value: function chunkUnique(columnName) {
      var chunk = [];
      this.items.forEach(function (item, i) {
        if (columnName in item) {
          if (chunk.find(function (x) {
            return x == item[columnName];
          }) == undefined) {
            chunk.push(item[columnName]);
          }
        }
      });
      return chunk;
    }
    /**
      * Get eloquent unsaved data means Id of eloquent is null
      * @return {this}
      */

  }, {
    key: "unSaved",
    value: function unSaved() {
      return this.filter(function (x) {
        return x[x.getPrimaryKey()] == null;
      });
    }
    /**
      * Get eloquent unsaved data means Id of eloquent is not null
      * @return {this}
      */

  }, {
    key: "saved",
    value: function saved() {
      return this.filter(function (x) {
        return x[x.getPrimaryKey()] != null;
      });
    }
    /**
      * Sum a colum of Collection item
      * @param {string} columnName
      * @return {number}
      */

  }, {
    key: "sum",
    value: function sum(columnName) {
      var total = 0;
      this.items.forEach(function (item, i) {
        total += item[columnName];
      });
      return total;
    }
    /**
     *
     * Average a colum of Collection item
     * @param {string} columnName
     * @return {number}
     */

  }, {
    key: "avg",
    value: function avg(columnName) {
      var total = 0;
      this.items.forEach(function (item, i) {
        total += item[columnName];
      });
      return total / this.items.length;
    }
    /**
      * Find an object has minimum value of column
      * @param {string} columnName
      * @return {{}}
      */

  }, {
    key: "min",
    value: function min(columnName) {
      var min = 0;
      var data = null;
      this.items.forEach(function (item, i) {
        if (data == null) {
          min = item[columnName];
          data = item;
        } else {
          if (min > item[columnName]) {
            min = item[columnName];
            data = item;
          }
        }
      });
      return data;
    }
    /**
      *
      * Find an object has maximum value of column
      * @param {string} columnName
      * @return {{}}
      */

  }, {
    key: "max",
    value: function max(columnName) {
      var min = 0;
      var data = null;
      this.items.forEach(function (item, i) {
        if (data == null) {
          min = item[columnName];
          data = item;
        } else {
          if (min < item[columnName]) {
            min = item[columnName];
            data = item;
          }
        }
      });
      return data;
    }
    /**
     *
     * @return {[]}
     */

  }, {
    key: _Symbol$iterator,
    value: function value() {
      return this.items.values();
    }
  }]);
  return CollectionModel;
}(_Collection2["default"]);

var _default = CollectionModel;
exports["default"] = _default;