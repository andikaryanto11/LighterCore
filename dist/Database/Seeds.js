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

var _DateFormat = _interopRequireDefault(require("../Libraries/DateFormat"));

/**
 * @clas Seeds
 */
var Seeds = /*#__PURE__*/function () {
  function Seeds() {
    (0, _classCallCheck2["default"])(this, Seeds);
  }

  (0, _createClass2["default"])(Seeds, null, [{
    key: "isSeedExist",
    value:
    /**
      * Check if seed file was executed before,
      * its used to determine you will executed the seed again or not.
      * See in Seed folder as example
      *
      * @param {any} knex
      * @param {string} seedFileName
      * @return {boolean}
      */
    function () {
      var _isSeedExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(knex, seedFileName) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return knex.table('seeds').where({
                  name: seedFileName
                });

              case 2:
                _context.t0 = _context.sent.length;
                return _context.abrupt("return", _context.t0 > 0);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isSeedExist(_x, _x2) {
        return _isSeedExist.apply(this, arguments);
      }

      return isSeedExist;
    }()
    /**
      * Insert Seed File Batch to table 'seeds'
      *
      * @param {*} knex
      * @param {string} seedFileName
      */

  }, {
    key: "insertSeedBatch",
    value: function () {
      var _insertSeedBatch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(knex, seedFileName) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return knex('seeds').insert({
                  id: null,
                  name: seedFileName,
                  time: _DateFormat["default"].getCurrentDate('YYYY-MM-DD HH:mm:ss')
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function insertSeedBatch(_x3, _x4) {
        return _insertSeedBatch.apply(this, arguments);
      }

      return insertSeedBatch;
    }()
  }]);
  return Seeds;
}();

var _default = Seeds;
exports["default"] = _default;