"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Request = _interopRequireDefault(require("../Http/Request.js"));

var _Response = _interopRequireDefault(require("../Http/Response.js"));

var _express = require("express");

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _Session = _interopRequireDefault(require("../Http/Session.js"));

var _uuid = require("uuid");

var _DbConnection = _interopRequireDefault(require("../Database/Connection/DbConnection.js"));

var _Kernel = _interopRequireDefault(require("../../App/Config/Kernel.js"));

var _Web = _interopRequireDefault(require("../../App/Routes/Web.js"));

var _Api = _interopRequireDefault(require("../../App/Routes/Api.js"));

var _csurf = _interopRequireDefault(require("csurf"));

var _VerifyCsrf = _interopRequireDefault(require("../Middleware/VerifyCsrf.js"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("../../../config"));

var _graphql = require("graphql");

var _expressGraphql = require("express-graphql");

var _GraphQL = _interopRequireDefault(require("../../App/Config/GraphQL.js"));

var _Container = _interopRequireDefault(require("../../App/Config/Container.js"));

var _Container2 = _interopRequireDefault(require("../Container/Container.js"));

var _nodeDependencyInjection = require("node-dependency-injection");

var _RequestInstance = _interopRequireDefault(require("../Middleware/RequestInstance.js"));

var _MiddlewareCallback = _interopRequireDefault(require("../Middleware/MiddlewareCallback.js"));

var _Cron = _interopRequireDefault(require("../../App/Config/Cron.js"));

var _CronService = _interopRequireDefault(require("../Services/CronService.js"));

var _ContainerLoader = _interopRequireDefault(require("../Container/ContainerLoader.js"));

var _InstanceLoader = _interopRequireDefault(require("./InstanceLoader.js"));

var _GraphQLLoader = _interopRequireDefault(require("../GraphQL/GraphQLLoader.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var rfs = require('rotating-file-stream');

var KnexSessionStore = require('connect-session-knex')(_expressSession["default"]);

/**
 * @class AppOverride
 */
var AppOverride = /*#__PURE__*/function () {
  function AppOverride() {
    (0, _classCallCheck2["default"])(this, AppOverride);
  }

  (0, _createClass2["default"])(AppOverride, null, [{
    key: "override",
    value:
    /**
      *
      * @param {Express} app
      */
    function override(app) {
      AppOverride.use(app); // AppOverride.csrf(app);

      AppOverride.logger(app);
      var container = AppOverride.container();
      AppOverride.middleware(app, container);
      AppOverride.graphQL(app);
      AppOverride.cron();
    }
    /**
      *
      * @param {Express} app
      * @param {CoreContainer} container
      */

  }, {
    key: "graphQL",
    value: function graphQL(app) {
      var queryFields = _GraphQLLoader["default"].loadQuery(_GraphQL["default"].query());

      var mutationFields = _GraphQLLoader["default"].loadMutation(_GraphQL["default"].mutation());

      var rootQuery = new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: queryFields
      });
      var rootMutation = new _graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: mutationFields
      });
      app.use('/graphql', (0, _expressGraphql.graphqlHTTP)(function (request, response) {
        return {
          schema: new _graphql.GraphQLSchema({
            query: rootQuery,
            mutation: rootMutation
          }),
          graphiql: true,
          context: _objectSpread(_objectSpread({}, _GraphQL["default"].context()), {}, {
            request: request,
            response: response
          })
        };
      }));
    }
    /**
      *
      * @param {Express} app
      */

  }, {
    key: "use",
    value: function use(app) {
      app.use((0, _expressFileupload["default"])());
      app.use(_Request["default"].request);
      app.use(_Response["default"].response);
      var store = new KnexSessionStore({
        tablename: 'sessions',
        createtable: true,
        knex: _DbConnection["default"]
      });
      app.use((0, _expressSession["default"])({
        name: process.env.SESSION_NAME,
        genid: function genid(req) {
          return (0, _uuid.v4)(); // use UUIDs for session IDs
        },
        cookie: {
          secure: process.env.APP_MODE == 'production' ? process.env.COOKIE_SECURE : false,
          httpOnly: process.env.COOKIE_HTTP_ONLY == 'true' ? true : false,
          maxAge: Number(process.env.COOKIE_EXPIRED) * 1000
        },
        secret: process.env.APP_KEY,
        store: store
      }));
      app.use(_Session["default"].session);

      if (process.env.CSRF_USAGE == 'true') {
        app.use((0, _csurf["default"])({
          cookie: false
        }));
      }
    }
    /**
      *
      * @param {Express} app
      */

  }, {
    key: "middleware",
    value: function middleware(app) {
      var eachMiddleware = function eachMiddleware(e, i) {
        return _MiddlewareCallback["default"].callBefore(e);
      };

      var globalMiddlewares = _Kernel["default"].middlewares.map(eachMiddleware);

      var apiMiddlewares = _Kernel["default"].middlewareGroups.api.map(eachMiddleware);

      var webMiddlewares = _Kernel["default"].middlewareGroups.web.map(eachMiddleware);

      app.use('/api', [].concat((0, _toConsumableArray2["default"])(globalMiddlewares), (0, _toConsumableArray2["default"])(apiMiddlewares)), (0, _Api["default"])().getRouter());
      app.use('/', [].concat((0, _toConsumableArray2["default"])(globalMiddlewares), (0, _toConsumableArray2["default"])(webMiddlewares)), (0, _Web["default"])().getRouter());
    }
    /**
      *
      * @param {Express} app
      */

  }, {
    key: "csrf",
    value: function csrf(app) {}
    /**
     * Create conatainer for dependency injection
     * @return {CoreContainer}
     */

  }, {
    key: "container",
    value: function container() {
      return _ContainerLoader["default"].load();
    }
    /**
     *
     * @param {Express} app
     * @return {void}
     */

  }, {
    key: "logger",
    value: function logger(app) {
      var accessLogStream = rfs.createStream('access.log', {
        interval: '1d',
        path: _config["default"].sourcePath + '/Write/logs'
      });
      app.use((0, _morgan["default"])('combined', {
        stream: accessLogStream
      }));
    }
    /**
     *
     * @return {void}
     */

  }, {
    key: "cron",
    value: function cron() {
      _CronService["default"].resetCron();
    }
  }]);
  return AppOverride;
}();

var _default = AppOverride;
exports["default"] = _default;