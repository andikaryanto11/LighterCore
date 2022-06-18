"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Entity = _interopRequireDefault(require("./Entity"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class EntityScope
 */
var EntityScope = /*#__PURE__*/function () {
  /**
   *
   * @var {EntityScope|null}
   */

  /**
   *
   * @var {[]}
   */

  /**
   *
   */
  function EntityScope() {
    (0, _classCallCheck2["default"])(this, EntityScope);
    (0, _defineProperty2["default"])(this, "entities", []);
  }
  /**
   *
   * @return {EntityScope}
   */


  (0, _createClass2["default"])(EntityScope, [{
    key: "addEntity",
    value:
    /**
     * Add entity that will be persisted
     *
     * @param {string} perform
     * @param {Entity} entity
     * @return {void}
     */
    function addEntity(perform, entity) {
      var isEntityExist = false; // if (this.entities) {

      var _iterator = _createForOfIteratorHelper(this.entities),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var existedEntity = _step.value;

          if (entity === existedEntity['entity'] && perform === entity['perform']) {
            isEntityExist = true;
            break;
          }
        } // }

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!isEntityExist) {
        this.entities.push({
          perform: perform,
          entity: entity
        });
      }
    }
    /**
     * Get entities scope
     *
     * @return {[]}
     */

  }, {
    key: "getEntities",
    value: function getEntities() {
      return this.entities;
    }
    /**
     * Clean entity scope
     *
     * @return {void}
     */

  }, {
    key: "clean",
    value: function clean() {
      this.entities = [];
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (EntityScope.instance == null) {
        EntityScope.instance = new this();
      }

      return EntityScope.instance;
    }
  }]);
  return EntityScope;
}();

(0, _defineProperty2["default"])(EntityScope, "PERFORM_ADD_UPDATE", '1addUpdate');
(0, _defineProperty2["default"])(EntityScope, "PERFORM_DELETE", '2delete');
(0, _defineProperty2["default"])(EntityScope, "instance", null);
var _default = EntityScope;
exports["default"] = _default;