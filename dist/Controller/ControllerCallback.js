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

var _Error = _interopRequireDefault(require("../Logger/Error"));

var _Redirect = _interopRequireDefault(require("./Redirect"));

var _ResponseData = _interopRequireDefault(require("./ResponseData"));

var _View = _interopRequireDefault(require("./View"));

var _Response = _interopRequireDefault(require("../Controller/Response"));

var _express = require("express");

var _config = _interopRequireDefault(require("../../../config"));

var _Template = _interopRequireDefault(require("../Template/Template"));

var _View2 = _interopRequireDefault(require("../../App/Config/View"));

var _InstanceLoader = _interopRequireDefault(require("../Express/InstanceLoader"));

var _MiddlewareCallback = _interopRequireDefault(require("../Middleware/MiddlewareCallback"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @class ControllerCallback
 */
var ControllerCallback = /*#__PURE__*/function () {
  function ControllerCallback() {
    (0, _classCallCheck2["default"])(this, ControllerCallback);
  }

  (0, _createClass2["default"])(ControllerCallback, null, [{
    key: "call",
    value:
    /**
     * Will instanciate controller class wether from DI or class
     *
     * @param {string} controller
     * @param {{}} additionalData
     * @param {[]} afterMiddlewares
     * @return {Function}
     */
    function call(controller, additionalData, afterMiddlewares) {
      return /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
          var controllerFunction, controllerAlias, fn, controllerInstance, data, returnedData, afterMiddlewareReturns, afterMiddlewareIndex, _iterator, _step, afterMiddleware, afterReturn, afterReturnedData;

          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  controllerFunction = controller.split(':');
                  controllerAlias = controllerFunction[0];
                  fn = controllerFunction[1];
                  controllerInstance = _InstanceLoader["default"].load(controllerAlias);
                  data = controllerInstance[fn](_objectSpread({
                    request: req,
                    session: req.session,
                    params: req.params,
                    query: req.query,
                    body: req.body
                  }, additionalData));
                  returnedData = null;

                  if (!(data instanceof Promise)) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 10;
                  return data;

                case 10:
                  returnedData = _context.sent;
                  _context.next = 14;
                  break;

                case 13:
                  returnedData = data;

                case 14:
                  afterMiddlewareReturns = {};
                  afterMiddlewareIndex = 0;
                  _iterator = _createForOfIteratorHelper(afterMiddlewares);
                  _context.prev = 17;

                  _iterator.s();

                case 19:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 34;
                    break;
                  }

                  afterMiddleware = _step.value;
                  afterReturn = _MiddlewareCallback["default"].callAfter(afterMiddleware, req);
                  afterReturnedData = null;

                  if (!(afterReturn instanceof Promise)) {
                    _context.next = 29;
                    break;
                  }

                  _context.next = 26;
                  return afterReturn;

                case 26:
                  afterReturnedData = _context.sent;
                  _context.next = 30;
                  break;

                case 29:
                  afterReturnedData = afterReturn;

                case 30:
                  afterMiddlewareReturns = _objectSpread(_objectSpread({}, afterMiddlewareReturns), {}, (0, _defineProperty2["default"])({}, afterMiddlewareIndex, afterReturnedData));
                  afterMiddlewareIndex++;

                case 32:
                  _context.next = 19;
                  break;

                case 34:
                  _context.next = 39;
                  break;

                case 36:
                  _context.prev = 36;
                  _context.t0 = _context["catch"](17);

                  _iterator.e(_context.t0);

                case 39:
                  _context.prev = 39;

                  _iterator.f();

                  return _context.finish(39);

                case 42:
                  ;
                  _context.next = 45;
                  return ControllerCallback.response(req, res, returnedData, afterMiddlewareReturns);

                case 45:
                  _context.next = 52;
                  break;

                case 47:
                  _context.prev = 47;
                  _context.t1 = _context["catch"](0);

                  _Error["default"].create('error', _context.t1.stack);

                  if (process.env.APP_MODE == 'development') {
                    next(_context.t1);
                  }

                  if (process.env.APP_MODE == 'production') {
                    res.status(500).send('An error has occured, see error.log for detail');
                  }

                case 52:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 47], [17, 36, 39, 42]]);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    /**
      *
      * @param {Request} req
      * @param {Response} res
      * @param {ResponseData|View|Redirect} returnedData
      * @param {Response} afterMiddlewareReturns
      */

  }, {
    key: "response",
    value: function () {
      var _response = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, returnedData) {
        var afterMiddlewareReturns,
            response,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                afterMiddlewareReturns = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
                afterMiddlewareReturns = {
                  After: afterMiddlewareReturns
                };

                if (returnedData == undefined) {
                  res.status(400).send('Unexpected Error, Method didnt return anything');
                }

                response = null;

                if (!(returnedData instanceof _Response["default"])) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return returnedData.send();

              case 7:
                response = _context2.sent;

              case 8:
                if (response instanceof _ResponseData["default"]) {
                  res.status(response.code).json(_objectSpread(_objectSpread({}, response.data), afterMiddlewareReturns));
                }

                if (returnedData instanceof _View["default"]) {
                  if (returnedData.type == 'html') {
                    res.send(returnedData.view);
                  }

                  if (returnedData.type == 'view') {
                    res.render(returnedData.view, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, returnedData.data), afterMiddlewareReturns), (0, _Template["default"])()), _View2["default"].hook()));
                  }

                  if (returnedData.type == 'sendFile') {
                    res.sendFile(_config["default"].sourcePath + '/App/Views/' + returnedData.view);
                  }
                }

                if (returnedData instanceof _Redirect["default"]) {
                  res.redirect(returnedData.route);
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function response(_x4, _x5, _x6) {
        return _response.apply(this, arguments);
      }

      return response;
    }()
  }]);
  return ControllerCallback;
}();

var _default = ControllerCallback;
exports["default"] = _default;