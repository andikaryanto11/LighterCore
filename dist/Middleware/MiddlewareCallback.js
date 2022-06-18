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

var _InstanceLoader = _interopRequireDefault(require("../Express/InstanceLoader"));

var _Error = _interopRequireDefault(require("../Logger/Error"));

var _require = require('../Container/Container'),
    Container = _require["default"];
/**
 * @class MiddlewareCallback
 */


var MiddlewareCallback = /*#__PURE__*/function () {
  function MiddlewareCallback() {
    (0, _classCallCheck2["default"])(this, MiddlewareCallback);
  }

  (0, _createClass2["default"])(MiddlewareCallback, null, [{
    key: "callBefore",
    value:
    /**
     * Will instanciate middleware class class wether from DI
     *
     * @param {string} middleware
     * @return {Function}
     */
    function callBefore(middleware) {
      return /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
          var middlewareParams, fn, middlewareAlias, middlewareFunction, middlewareInstance, data;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  try {
                    middlewareParams = {
                      request: req,
                      session: req.session,
                      params: req.params,
                      query: req.query,
                      body: req.body,
                      response: res,
                      next: next
                    };
                    fn = 'execute';
                    middlewareAlias = middleware;

                    if (typeof middleware == 'string') {
                      middlewareFunction = middleware.split(':');
                      middlewareAlias = middlewareFunction[0];
                      fn = middlewareFunction[1];
                    }

                    middlewareInstance = _InstanceLoader["default"].load(middlewareAlias);
                    data = middlewareInstance[fn](middlewareParams);
                  } catch (e) {
                    _Error["default"].create('error', e.stack);

                    if (process.env.APP_MODE == 'development') {
                      next(e);
                    }

                    if (process.env.APP_MODE == 'production') {
                      res.status(500).send('An error has occured, see error.log for detail');
                    }
                  }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    /**
     * Will instanciate middleware class class wether from DI
     *
     * @param {string} middleware
     * @param {any} req
     * @return {Function}
     */

  }, {
    key: "callAfter",
    value: function callAfter(middleware, req) {
      var fn = 'execute';
      var middlewareAlias = middleware;

      if (typeof middleware == 'string') {
        var middlewareFunction = middleware.split(':');
        middlewareAlias = middlewareFunction[0];
        fn = middlewareFunction[1];
      }

      console.log(middleware);

      var middlewareInstance = _InstanceLoader["default"].load(middlewareAlias);

      return middlewareInstance[fn](req);
    }
  }]);
  return MiddlewareCallback;
}();

var _default = MiddlewareCallback;
exports["default"] = _default;