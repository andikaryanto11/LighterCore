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

var _DbConnection = _interopRequireDefault(require("./Connection/DbConnection.js"));

/**
 * @clas DbTrans
 */
var DbTrans = /*#__PURE__*/function () {
  function DbTrans() {
    (0, _classCallCheck2["default"])(this, DbTrans);
  }

  (0, _createClass2["default"])(DbTrans, null, [{
    key: "beginTransaction",
    value:
    /**
     *
     * @return {Promise<Knex<any>>}
     */
    function () {
      var _beginTransaction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _DbConnection["default"].transaction());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function beginTransaction() {
        return _beginTransaction.apply(this, arguments);
      }

      return beginTransaction;
    }()
  }]);
  return DbTrans;
}();

var _default = DbTrans;
exports["default"] = _default;