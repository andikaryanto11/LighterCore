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

var _graphql = require("graphql");

/**
 * @class GraphQLField
 */
var GraphQLField = /*#__PURE__*/function () {
  function GraphQLField() {
    (0, _classCallCheck2["default"])(this, GraphQLField);
  }

  (0, _createClass2["default"])(GraphQLField, [{
    key: "type",
    value:
    /**
     * Return type of the result
     * @return {GraphQLList}
     */
    function type() {
      return new _graphql.GraphQLList();
    }
    /**
      * The arguments input
      * @return {{}}
      */

  }, {
    key: "args",
    value: function args() {
      return {};
    }
    /**
      * Description of field
      * @return {string}
      */

  }, {
    key: "description",
    value: function description() {
      return '';
    }
    /**
     * List of middleware, executed before resolve
     * @return {[]}
     */

  }, {
    key: "middlewares",
    value: function middlewares() {
      return [];
    }
    /**
      * Extension
      * @param {{}} param
      * @return {any}
      */

  }, {
    key: "extensions",
    value: function extensions(_ref) {
      var document = _ref.document,
          variables = _ref.variables,
          operationName = _ref.operationName,
          result = _ref.result,
          context = _ref.context;
      return '';
    }
    /**
      * Resolve data
      * @param {any} parent
      * @param {any} args
      * @param {any} context
      * @return {[]}
      */

  }, {
    key: "resolve",
    value: function () {
      var _resolve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, context) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function resolve(_x, _x2, _x3) {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    }()
  }]);
  return GraphQLField;
}();

var _default = GraphQLField;
exports["default"] = _default;