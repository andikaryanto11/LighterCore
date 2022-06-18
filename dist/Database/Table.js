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

var _DbConnection = _interopRequireDefault(require("./Connection/DbConnection"));

var _fs = _interopRequireDefault(require("fs"));

var _StringLib = _interopRequireDefault(require("../Libraries/StringLib"));

var _config = _interopRequireDefault(require("../../../config"));

/**
 * Class Table
 */
var Table = /*#__PURE__*/function () {
  function Table() {
    (0, _classCallCheck2["default"])(this, Table);
  }

  (0, _createClass2["default"])(Table, null, [{
    key: "columnInfo",
    value:
    /**
      * get table colum info
      * @param {string} tableName
      */
    function () {
      var _columnInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tableName) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _DbConnection["default"].table(tableName).columnInfo();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function columnInfo(_x) {
        return _columnInfo.apply(this, arguments);
      }

      return columnInfo;
    }()
    /**
     * Create Model file with intended table
     * @param {string} tableName
     */

  }, {
    key: "makeModel",
    value: function () {
      var _makeModel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tableName) {
        var modelName, actualColumns, columns, props, content, fileName;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                modelName = _StringLib["default"].ucFirst(tableName);
                _context2.next = 3;
                return Table.columnInfo(tableName);

              case 3:
                actualColumns = _context2.sent;
                columns = Object.keys(actualColumns);
                props = '';
                columns.forEach(function (e, i) {
                  props += "\n\t".concat(e, " = null;");
                });

                content = function content() {
                  return "import Model from \"../../Core/Model/Model.js\";\n               \nclass ".concat(modelName, " extends Model {\n                    ").concat(props, "\n                    \n\tconstructor() { \n\t\tsuper(\"").concat(tableName, "\", \"Id\");\n\t}\n               \n}\n               \nexport default ").concat(modelName, ";");
                };

                fileName = _config["default"].sourcePath + '/App/Models/${modelName}.js';

                _fs["default"].open(fileName, 'r', function (err, fd) {
                  if (err) {
                    _fs["default"].writeFile(fileName, content(), function (err) {
                      if (err) throw err; // console.log('Saved!');
                    });
                  } else {
                    throw new Error('File is already exist !');
                  }
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function makeModel(_x2) {
        return _makeModel.apply(this, arguments);
      }

      return makeModel;
    }()
  }]);
  return Table;
}();

var _default = Table;
exports["default"] = _default;