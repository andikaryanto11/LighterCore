"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = require("express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Application = _interopRequireDefault(require("../App/Config/Application"));

_dotenv["default"].config();
/**
 * @class App
 */


var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2["default"])(this, App);
  }

  (0, _createClass2["default"])(App, null, [{
    key: "run",
    value:
    /**
     *
     * @param {Express} app
     * @param {Express} express
     */
    function run(app, express) {
      _Application["default"].init(app, express);

      app.listen(process.env.APP_PORT, function () {
        return console.log("Server Up And Running. Listening On Port ".concat(process.env.APP_PORT, ". \n                Press Ctrl + C to kill"));
      });
    }
  }]);
  return App;
}();

var _default = App;
exports["default"] = _default;