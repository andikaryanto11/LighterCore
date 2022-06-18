"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Request = _interopRequireDefault(require("../Http/Request"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _request = /*#__PURE__*/new WeakMap();

var _filter = /*#__PURE__*/new WeakMap();

var _useIndex = /*#__PURE__*/new WeakMap();

var _dtRowClass = /*#__PURE__*/new WeakMap();

var _dtRowId = /*#__PURE__*/new WeakMap();

var _column = /*#__PURE__*/new WeakMap();

var _columnsOnly = /*#__PURE__*/new WeakMap();

var _currentPage = /*#__PURE__*/new WeakMap();

var _pageSize = /*#__PURE__*/new WeakMap();

var _outputs = /*#__PURE__*/new WeakMap();

/**
 * @class DatatableModel
 */
var DatatablesModel = /*#__PURE__*/function () {
  /**
  *
  * @param {*} model
  * @param {{}} filter
  * @param {string} method
  * @param {boolean} useIndex
  * @return {void}
  */
  function DatatablesModel(model) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
    var useIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    (0, _classCallCheck2["default"])(this, DatatablesModel);

    _classPrivateFieldInitSpec(this, _request, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _filter, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _useIndex, {
      writable: true,
      value: true
    });

    _classPrivateFieldInitSpec(this, _dtRowClass, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _dtRowId, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _column, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _columnsOnly, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _currentPage, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pageSize, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _outputs, {
      writable: true,
      value: {
        draw: null,
        recordsTotal: null,
        recordsFiltered: null,
        data: null
      }
    });

    var req = _Request["default"].getInstance().getRequest();

    if (method == 'POST') {
      (0, _classPrivateFieldSet2["default"])(this, _request, req.body);
    } else {
      (0, _classPrivateFieldSet2["default"])(this, _request, req.query);
    }

    (0, _classPrivateFieldSet2["default"])(this, _filter, filter);
    this.model = model;
    (0, _classPrivateFieldSet2["default"])(this, _useIndex, useIndex);
  }
  /**
  * Set parameterr to fetch the data
  * @return {{}}
  */


  (0, _createClass2["default"])(DatatablesModel, [{
    key: "setParams",
    value: function setParams() {
      var params = (0, _classPrivateFieldGet2["default"])(this, _filter);

      if ((0, _classPrivateFieldGet2["default"])(this, _request).length !== -1) {
        (0, _classPrivateFieldSet2["default"])(this, _currentPage, (0, _classPrivateFieldGet2["default"])(this, _request).start = 0 ? 1 : (0, _classPrivateFieldGet2["default"])(this, _request).start / (0, _classPrivateFieldGet2["default"])(this, _request).length + 1);
        (0, _classPrivateFieldSet2["default"])(this, _pageSize, (0, _classPrivateFieldGet2["default"])(this, _request).length);
        params.page = (0, _classPrivateFieldGet2["default"])(this, _currentPage);
        params.size = (0, _classPrivateFieldGet2["default"])(this, _pageSize);
      }

      if ((0, _classPrivateFieldGet2["default"])(this, _request).search.value !== '') {
        params.group = {};
        var searchValue = (0, _classPrivateFieldGet2["default"])(this, _request).search.value;
        var orLikeData = {};
        (0, _classPrivateFieldGet2["default"])(this, _column).forEach(function (column, i) {
          if (column.column.length != 0) {
            if (column.searchable) {
              var col = column.column.split('.');
              var newCol = null;

              if (col.length === 3) {
                newCol = col[0] + '.' + col[1];
              } else if (col.length === 2) {
                newCol = col[0] + '.' + col[1];
              } else {
                newCol = column.column;
              }

              orLikeData[newCol] = searchValue;
            }
          }
        });
        params.group['orLike'] = orLikeData;
      }

      if ((0, _classPrivateFieldGet2["default"])(this, _request).order[0].column > 0) {
        var order = (0, _classPrivateFieldGet2["default"])(this, _request).order[0].column;
        var dir = (0, _classPrivateFieldGet2["default"])(this, _request).order[0].dir;
        params.order = {};

        if ((0, _classPrivateFieldGet2["default"])(this, _column)[order] && (0, _classPrivateFieldGet2["default"])(this, _column)[order].orderable) {
          var col = (0, _classPrivateFieldGet2["default"])(this, _column)[order].column.split('.');
          var newCol = null;

          if (col.length === 3) {
            newCol = col[0] + '.' + col[1];
          } else if (col.length === 2) {
            newCol = col[0] + '.' + col[1];
          } else {
            newCol = (0, _classPrivateFieldGet2["default"])(this, _column)[order].column;
          }

          params.order = (0, _defineProperty2["default"])({}, newCol, dir === 'asc' ? 'ASC' : 'DESC');
        }
      }

      return params;
    }
    /**
    * Populate the data to store to datatables.net
    */

  }, {
    key: "populate",
    value: function () {
      var _populate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var params, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                params = this.setParams();
                _context.next = 4;
                return this.model.findAll(params, (0, _classPrivateFieldGet2["default"])(this, _columnsOnly));

              case 4:
                result = _context.sent;
                (0, _classPrivateFieldGet2["default"])(this, _outputs).draw = (0, _classPrivateFieldGet2["default"])(this, _request).draw > 0 ? (0, _classPrivateFieldGet2["default"])(this, _request).draw : 0;
                (0, _classPrivateFieldGet2["default"])(this, _outputs).recordsTotal = result.length;
                _context.next = 9;
                return this.allData(params);

              case 9:
                (0, _classPrivateFieldGet2["default"])(this, _outputs).recordsFiltered = _context.sent;
                (0, _classPrivateFieldGet2["default"])(this, _outputs).data = this.output(result);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                (0, _classPrivateFieldGet2["default"])(this, _outputs).error = _context.t0.message;

              case 16:
                return _context.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _outputs));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function populate() {
        return _populate.apply(this, arguments);
      }

      return populate;
    }()
    /**
    * Count All data in Eloquent table mapping
    *
    * @param {{}} filter
    */

  }, {
    key: "allData",
    value: function () {
      var _allData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var filter,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                delete filter.page;
                delete filter.size;
                _context2.next = 5;
                return this.model.count(filter, (0, _classPrivateFieldGet2["default"])(this, _columnsOnly));

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function allData() {
        return _allData.apply(this, arguments);
      }

      return allData;
    }()
    /**
    * Get the data
    *
    * @param {[]} datas Of Eloquent Object
     * @return {[]}
    */

  }, {
    key: "output",
    value: function output(datas) {
      var _this = this;

      var out = [];
      var i = (0, _classPrivateFieldGet2["default"])(this, _currentPage) * (0, _classPrivateFieldGet2["default"])(this, _pageSize) - (0, _classPrivateFieldGet2["default"])(this, _pageSize);
      datas.forEach(function (data, k) {
        var row = {};
        (0, _classPrivateFieldGet2["default"])(_this, _column).forEach(function (column, j) {
          if (column.ispassedback) {
            var rowdata = null;

            if (column.callback != null) {
              var fn = column.callback;
              rowdata = fn(data, i);
            } else {
              rowdata = _this.getColValue(column, data);
            }

            var selectedColumn = '';

            if ((0, _classPrivateFieldGet2["default"])(_this, _useIndex)) {
              row[j] = rowdata;
            } else {
              var col = column.column.split('.');

              if (col.length === 3) {
                selectedColumn = col[2];
              } else if (col.length === 2) {
                selectedColumn = col[1];
              } else {
                selectedColumn = col[0];
              }

              row[selectedColumn] = rowdata;
            }

            if ((0, _classPrivateFieldGet2["default"])(_this, _dtRowId) && (0, _classPrivateFieldGet2["default"])(_this, _dtRowId) === column.column) {
              var _col = column.column.split('.');

              if (_col.length === 3) {
                selectedColumn = _col[2];
              } else if (_col.length === 2) {
                selectedColumn = _col[1];
              } else {
                selectedColumn = _col[0];
              }

              row['DT_RowId'] = data[selectedColumn];
            }

            row['DTRowClass'] = (0, _classPrivateFieldGet2["default"])(_this, _dtRowClass);
          }
        });
        i++;
        out.push(row);
      });
      return out;
    }
    /**
    * Set Column You want to return
    *
    * @param {string}  column
    * @param {string}  foreignKey     Nullable
    * @param {Function} callback       Nullable
    * @param {boolean} searchable     Nullable
    * @param {boolean} orderable      Nullable
    * @param {boolean} isdefaultorder Nullable
    * @param {ispassedBack} ispassedBack Nullable
     * @return {DatatablesModel}
    */

  }, {
    key: "addColumn",
    value: function addColumn(column) {
      var foreignKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var searchable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var orderable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var isdefaultorder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var ispassedBack = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
      var columns = {
        column: column,
        foreignKey: foreignKey,
        callback: callback,
        searchable: searchable,
        orderable: orderable,
        isdefaultorder: isdefaultorder,
        ispassedback: ispassedBack
      };
      (0, _classPrivateFieldGet2["default"])(this, _column).push(columns);

      if (column != null && column != '') {
        var col = column.split('.');
        var newcolumn = '';

        if (col.length === 3) {
          newcolumn = "".concat(col[0], ".").concat(col[1], " as ").concat(col[2]);
        } else if (col.length === 2) {
          newcolumn = "".concat(col[0], ".").concat(col[1]);
        } else {
          newcolumn = col[0];
        }

        (0, _classPrivateFieldGet2["default"])(this, _columnsOnly).push(newcolumn);
      }

      return this;
    }
    /**
    * Add row class name for datatable.net
     * @param {string} className
     * @return {DatatablesModel}
    */

  }, {
    key: "addDtRowClass",
    value: function addDtRowClass(className) {
      (0, _classPrivateFieldSet2["default"])(this, _dtRowClass, className);
      return this;
    }
    /**
    * Add row id name for datatable.net
     * @param {string} columName
     * @return {DatatablesModel}
    */

  }, {
    key: "addDtRowId",
    value: function addDtRowId(columName) {
      (0, _classPrivateFieldSet2["default"])(this, _dtRowId, columName);
      return this;
    }
    /**
    * Get value if foreignkey filed not empty otherwise will return from Closure
    *
    * @param {string} column
    * @param {{}} data Of intended Instace Eloquent
    * @return {any}
    */

  }, {
    key: "getColValue",
    value: function getColValue(column, data) {
      var col = column.column.split('.');
      var columnname = null;

      if (col.length === 3) {
        columnname = col[2];
      } else if (col.length === 2) {
        columnname = col[1];
      } else {
        columnname = column.column;
      }

      return data[columnname];
    }
  }]);
  return DatatablesModel;
}();

var _default = DatatablesModel;
exports["default"] = _default;