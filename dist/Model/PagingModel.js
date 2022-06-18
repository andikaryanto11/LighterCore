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

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Model = _interopRequireDefault(require("./Model"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _model = /*#__PURE__*/new WeakMap();

var _filter = /*#__PURE__*/new WeakMap();

var _page = /*#__PURE__*/new WeakMap();

var _size = /*#__PURE__*/new WeakMap();

var _showedPage = /*#__PURE__*/new WeakMap();

var _outputs = /*#__PURE__*/new WeakMap();

/**
 * Class PagingModel
 */
var PagingModel = /*#__PURE__*/function () {
  /**
  * Constructor
  * @param {Model} model
  * @param {{}} filter
  * @param {number} page
  * @param {number} size
  * @param {number} showedPage
  * @param {{}} queryParams
  */
  function PagingModel(model) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;
    var showedPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
    var queryParams = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    (0, _classCallCheck2["default"])(this, PagingModel);

    _classPrivateFieldInitSpec(this, _model, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _filter, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _page, {
      writable: true,
      value: 1
    });

    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 1
    });

    _classPrivateFieldInitSpec(this, _showedPage, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _outputs, {
      writable: true,
      value: {
        CurrentPage: null,
        TotalPage: null,
        Data: null,
        TotalData: null,
        ShowingPage: [],
        GetQuery: null
      }
    });

    (0, _classPrivateFieldSet2["default"])(this, _model, model);
    (0, _classPrivateFieldSet2["default"])(this, _filter, filter);
    (0, _classPrivateFieldSet2["default"])(this, _size, size);
    (0, _classPrivateFieldSet2["default"])(this, _showedPage, showedPage);
    (0, _classPrivateFieldGet2["default"])(this, _outputs).CurrentPage = Number(page); // this.#_outputs.GetQuery = this.createGetParam(queryParams);

    if (!Number.isInteger(page)) {
      (0, _classPrivateFieldSet2["default"])(this, _page, 1);
    } else {
      (0, _classPrivateFieldSet2["default"])(this, _page, page);
    }
  }
  /**
  * Set Paging Available
  */


  (0, _createClass2["default"])(PagingModel, [{
    key: "setPaging",
    value: function setPaging() {
      var showedPage = (0, _classPrivateFieldGet2["default"])(this, _showedPage);
      var expandedPage = Math.floor(showedPage / 2);
      var lastPage = (0, _classPrivateFieldGet2["default"])(this, _page) + expandedPage;
      var firstPage = lastPage - showedPage + 1;

      if (firstPage <= 0) {
        firstPage = 1;
      }

      if ((0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage <= showedPage) {
        lastPage = (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage;

        if (showedPage - firstPage !== showedPage - 1) {
          firstPage = 1;
        }
      } else {
        if ((0, _classPrivateFieldGet2["default"])(this, _page) < lastPage - expandedPage) {
          lastPage = showedPage;

          if (lastPage > (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage) {
            lastPage = (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage;
          }
        } else {
          if ((0, _classPrivateFieldGet2["default"])(this, _page) < lastPage - expandedPage || lastPage < showedPage) {
            lastPage = showedPage;
          }

          if ((0, _classPrivateFieldGet2["default"])(this, _page) >= (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage - expandedPage) {
            lastPage = (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage;
            firstPage = (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage - expandedPage * 2;
          }
        }
      }

      for (var i = firstPage; i <= lastPage; i++) {
        (0, _classPrivateFieldGet2["default"])(this, _outputs).ShowingPage.push(i);
      }
    }
    /**
    * Set Parameter
    * @return {{}}
    */

  }, {
    key: "setParams",
    value: function setParams() {
      var params = (0, _classPrivateFieldGet2["default"])(this, _filter);
      params.page = (0, _classPrivateFieldGet2["default"])(this, _page), params.size = (0, _classPrivateFieldGet2["default"])(this, _size);
      return params;
    }
    /**
    * Fetch all data
    * @return {{}}
    */

  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var params, result, countAllData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                params = this.setParams();
                _context.next = 4;
                return (0, _classPrivateFieldGet2["default"])(this, _model).findAll(params);

              case 4:
                result = _context.sent;
                _context.next = 7;
                return this.allData(params);

              case 7:
                countAllData = _context.sent;
                (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalPage = Math.ceil(Number(countAllData) / (0, _classPrivateFieldGet2["default"])(this, _size));
                (0, _classPrivateFieldGet2["default"])(this, _outputs).Data = result;
                (0, _classPrivateFieldGet2["default"])(this, _outputs).TotalData = countAllData;
                this.setPaging();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                (0, _classPrivateFieldGet2["default"])(this, _outputs).Error = _context.t0.message;

              case 17:
                return _context.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _outputs));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
    * count All data
    * @param {*} filter
    * @return {number}
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
                return (0, _classPrivateFieldGet2["default"])(this, _model).count(filter);

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
  }]);
  return PagingModel;
}();

var _default = PagingModel;
exports["default"] = _default;