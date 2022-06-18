"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = _interopRequireDefault(require("../../../config"));

var _rollbar = _interopRequireDefault(require("rollbar"));

/**
 * @class Logger
 */
var Logger = /*#__PURE__*/function () {
  function Logger() {
    (0, _classCallCheck2["default"])(this, Logger);
  }

  (0, _createClass2["default"])(Logger, null, [{
    key: "create",
    value:
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} level
     * @param {string} message
     */
    function create(fileName, level, message) {
      if (_config["default"].useRollbarLogger) {
        var rollbar = new _rollbar["default"]({
          accessToken: _config["default"].rollbarAccessToken,
          captureUncaught: true,
          captureUnhandledRejections: true,
          logLevel: level,
          fileName: fileName,
          environment: _config["default"].environment
        });
        rollbar.log(message);
      }

      if (_config["default"].environment == 'development') {
        var _require = require('winston'),
            createLogger = _require.createLogger,
            format = _require.format,
            transports = _require.transports;

        var combine = format.combine,
            timestamp = format.timestamp,
            label = format.label,
            printf = format.printf;
        level = level.toLowerCase();
        var myFormat = printf(function (_ref) {
          var level = _ref.level,
              message = _ref.message,
              label = _ref.label,
              timestamp = _ref.timestamp;
          return "".concat(timestamp, " [").concat(label, "] ").concat(level, ": ").concat(message);
        });
        var logger = createLogger({
          format: combine(label({
            label: level
          }), timestamp(), myFormat),
          transports: [new transports.File({
            filename: _config["default"].sourcePath + '/Write/logs/' + fileName + '.log',
            level: level
          })],
          myFormat: myFormat
        });
        logger.log({
          level: level,
          message: message
        });
      }
    }
  }]);
  return Logger;
}();

var _default = Logger;
exports["default"] = _default;