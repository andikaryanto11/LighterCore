"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Command = _interopRequireDefault(require("../../App/Config/Command"));

var _Command2 = _interopRequireDefault(require("../Utilities/Command"));

var _InstanceLoader = _interopRequireDefault(require("./InstanceLoader"));

var _Command3 = _interopRequireDefault(require("../Config/Command"));

var _yargonaut = _interopRequireDefault(require("yargonaut"));

var _yargs = _interopRequireDefault(require("yargs"));

var _ContainerLoader = _interopRequireDefault(require("../Container/ContainerLoader"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @class CommandLoader
 */
var CommandLoader = /*#__PURE__*/function () {
  function CommandLoader() {
    (0, _classCallCheck2["default"])(this, CommandLoader);
  }

  (0, _createClass2["default"])(CommandLoader, null, [{
    key: "load",
    value:
    /**
     * load the exist command
     */
    function load() {
      _ContainerLoader["default"].load();

      var commands = _Command["default"].register();

      _yargonaut["default"].style('green');

      commands = [].concat((0, _toConsumableArray2["default"])(commands), (0, _toConsumableArray2["default"])(_Command3["default"].register()));

      var _iterator = _createForOfIteratorHelper(commands),
          _step;

      try {
        var _loop = function _loop() {
          var command = _step.value;

          var commandInstance = _InstanceLoader["default"].load(command);

          _yargs["default"].command(commandInstance.name(), commandInstance.description(), function (yargs) {
            var requireArgs = [];

            var _iterator2 = _createForOfIteratorHelper(commandInstance.getArguments()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var argument = _step2.value;

                if (argument.type == _Command2["default"].REQUIRE_TYPE) {
                  requireArgs.push(argument.name);
                }

                yargs.option(argument.name, {
                  describe: argument.description
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            yargs.demandOption(requireArgs);
          }, function (args) {
            commandInstance.execute(args);
          }).help().strict();
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _yargs["default"].parse(process.argv.slice(2)).argv;
    }
  }]);
  return CommandLoader;
}();

var _default = CommandLoader;
exports["default"] = _default;