"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _Collection = _interopRequireDefault(require("../ViewModel/Collection"));

var _ViewModel = _interopRequireDefault(require("../ViewModel/ViewModel"));

var _ResponseData = _interopRequireDefault(require("./ResponseData"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _message = /*#__PURE__*/new WeakMap();

var _code = /*#__PURE__*/new WeakMap();

var _responseCode = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _additionalData = /*#__PURE__*/new WeakMap();

/**
 * @class BaseResponse
 */
var Response = /*#__PURE__*/function () {
  /**
   *
   * @param {string} message
   * @param {number} code
   * @param {[]} responseCode
   * @param {{}} data
   */
  function Response(message, code, responseCode, data) {
    (0, _classCallCheck2["default"])(this, Response);

    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _code, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _responseCode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _additionalData, {
      writable: true,
      value: null
    });

    (0, _classPrivateFieldSet2["default"])(this, _message, message);
    (0, _classPrivateFieldSet2["default"])(this, _code, code);
    (0, _classPrivateFieldSet2["default"])(this, _responseCode, responseCode);
    (0, _classPrivateFieldSet2["default"])(this, _data, data);
  }
  /**
   * Set additional data
   * @param {{}} additionalData
   * @return {Response}
   */


  (0, _createClass2["default"])(Response, [{
    key: "setAdditionalData",
    value: function setAdditionalData(additionalData) {
      (0, _classPrivateFieldSet2["default"])(this, _additionalData, additionalData);
      return this;
    }
    /**
     * Send object data
     * @return {ResponseData}
     */

  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _ResponseData["default"].status((0, _classPrivateFieldGet2["default"])(this, _code));
                _context.next = 3;
                return this.getResult();

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send() {
        return _send.apply(this, arguments);
      }

      return send;
    }()
    /**
     * get result body
     * @return {{}}
     */

  }, {
    key: "getResult",
    value: function () {
      var _getResult = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var data, page, size, total, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = null;
                page = null;
                size = null;
                total = null;

                if (!((0, _classPrivateFieldGet2["default"])(this, _data) instanceof _Collection["default"])) {
                  _context2.next = 13;
                  break;
                }

                page = (0, _classPrivateFieldGet2["default"])(this, _data).getPage() != null ? parseInt((0, _classPrivateFieldGet2["default"])(this, _data).getPage()) : null;
                size = (0, _classPrivateFieldGet2["default"])(this, _data).getSize() != null ? parseInt((0, _classPrivateFieldGet2["default"])(this, _data).getSize()) : null;
                total = (0, _classPrivateFieldGet2["default"])(this, _data).getTotal() != null ? parseInt((0, _classPrivateFieldGet2["default"])(this, _data).getTotal()) : null;
                _context2.next = 10;
                return (0, _classPrivateFieldGet2["default"])(this, _data).proceedAndGetData();

              case 10:
                data = _context2.sent;
                _context2.next = 20;
                break;

              case 13:
                if (!((0, _classPrivateFieldGet2["default"])(this, _data) instanceof _ViewModel["default"])) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 16;
                return (0, _classPrivateFieldGet2["default"])(this, _data).toJson();

              case 16:
                data = _context2.sent;
                _context2.next = 20;
                break;

              case 19:
                data = (0, _classPrivateFieldGet2["default"])(this, _data);

              case 20:
                result = {
                  Data: data,
                  Code: (0, _classPrivateFieldGet2["default"])(this, _responseCode),
                  Message: (0, _classPrivateFieldGet2["default"])(this, _message),
                  AdditionalData: (0, _classPrivateFieldGet2["default"])(this, _additionalData)
                };

                if ((0, _classPrivateFieldGet2["default"])(this, _data) instanceof _Collection["default"]) {
                  result = _objectSpread({
                    Page: page,
                    Size: size,
                    Total: total
                  }, result);
                }

                return _context2.abrupt("return", result);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getResult() {
        return _getResult.apply(this, arguments);
      }

      return getResult;
    }()
    /**
     * Get status code
     * @return {int}
     */

  }, {
    key: "getStatusCode",
    value: function getStatusCode() {
      return (0, _classPrivateFieldGet2["default"])(this, _code);
    }
  }]);
  return Response;
}();

var _default = Response;
exports["default"] = _default;