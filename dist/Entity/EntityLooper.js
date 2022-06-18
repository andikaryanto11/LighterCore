"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _EntityList = _interopRequireDefault(require("./EntityList"));

/**
 * this class is used to cache N+1 query eager load loop
 */
var EntityLooper = /*#__PURE__*/function () {
  /**
   *
   * @var {[]}
   */

  /**
   *
   * @var {{}}
   */

  /**
   *
   * @var {EntityList}
   */

  /**
   *
   * @var {boolean}
   */

  /**
   *
   */
  function EntityLooper() {
    (0, _classCallCheck2["default"])(this, EntityLooper);
    (0, _defineProperty2["default"])(this, "items", {});
    (0, _defineProperty2["default"])(this, "entityList", null);
    (0, _defineProperty2["default"])(this, "lastIndex", false);
  }
  /**
   * @param {string} key
   * @return {EntityLooper}
   */


  (0, _createClass2["default"])(EntityLooper, [{
    key: "clean",
    value:
    /**
     * Clean the item that had been collected
     *
     * @return {EntityLooper}
     */
    function clean() {
      this.lastIndex = false;
      this.entityList = null;
      this.items = [];
      return this;
    }
    /**
     * check if current loop has data
     * @return {boolean}
     */

  }, {
    key: "hasEntityList",
    value: function hasEntityList() {
      return this.entityList != null;
    }
    /**
     * @param {[]} items
     * @return {EntityLooper}
     */

  }, {
    key: "setItems",
    value: function setItems(items) {
      this.items = items;
      return this;
    }
    /**
     * @return {[]}
     */

  }, {
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
    /**
     * @param {EntityList} entityList
     * @return {EntityLooper}
     */

  }, {
    key: "setEntityList",
    value: function setEntityList(entityList) {
      this.entityList = entityList;
      return this;
    }
    /**
     * @return {EntityList}
     */

  }, {
    key: "getEntityList",
    value: function getEntityList() {
      return this.entityList;
    }
    /**
     *
     * @return {boolean}
     */

  }, {
    key: "isLastIndex",
    value: function isLastIndex() {
      return this.lastIndex;
    }
    /**
     *
     * @param {boolean} isLastIndex
     * @return {EntityLooper}
     */

  }, {
    key: "setIsLastIndex",
    value: function setIsLastIndex(isLastIndex) {
      this.lastIndex = isLastIndex;
      return this;
    }
  }], [{
    key: "getInstance",
    value: function getInstance(key) {
      if (!(key in EntityLooper.instance)) {
        EntityLooper.instance[key] = new this();
      }

      return EntityLooper.instance[key];
    }
  }]);
  return EntityLooper;
}();

(0, _defineProperty2["default"])(EntityLooper, "instance", {});
var _default = EntityLooper;
exports["default"] = _default;