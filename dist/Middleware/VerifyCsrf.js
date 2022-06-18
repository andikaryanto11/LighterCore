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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = require("express");

var _Middleware2 = _interopRequireDefault(require("./Middleware"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

_dotenv["default"].config();
/**
 *
 */


var VerifyCsrf = /*#__PURE__*/function (_Middleware) {
  (0, _inherits2["default"])(VerifyCsrf, _Middleware);

  var _super = _createSuper(VerifyCsrf);

  function VerifyCsrf() {
    (0, _classCallCheck2["default"])(this, VerifyCsrf);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(VerifyCsrf, [{
    key: "execute",
    value:
    /**
    * @param {Request} req
    * @param {Response} res
    * @param {NextFunction} next
     */
    function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var isApi;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isApi = req.originalUrl.split('/')[1] == 'api';

                if (process.env.CSRF_USAGE == 'true' && !isApi) {
                  if (err.code == 'EBADCSRFTOKEN') {
                    res.send('Invalid CSRF Token');
                  } else {
                    next();
                  }
                } else {
                  next();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function execute(_x, _x2, _x3) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return VerifyCsrf;
}(_Middleware2["default"]);

;
var _default = VerifyCsrf;
exports["default"] = _default;