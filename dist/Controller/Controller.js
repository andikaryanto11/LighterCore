"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _StringLib = _interopRequireDefault(require("../Libraries/StringLib.js"));

var _config = _interopRequireDefault(require("../../../config"));

var _fs = _interopRequireDefault(require("fs"));

/**
 * @class Controller
 */
var Controller = /*#__PURE__*/function () {
  /**
   *
   */
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
  }
  /**
    *
    * @param {string} path
    * @param {string} controllerName
    * @throws {Error}
    */


  (0, _createClass2["default"])(Controller, null, [{
    key: "makeController",
    value: function makeController(path, controllerName) {
      controllerName = _StringLib["default"].ucFirst(controllerName);

      var content = function content() {
        return "import Controller from \"../../Core/Controller/Controller\";\n               \nclass ".concat(controllerName, " extends Controller {\n                    \n\tconstructor() { \n\t\tsuper();\n\t}\n                    \n\tasync index({request, session, params}) {\n\t}\n               \n}\n               \nexport default ").concat(controllerName, ";");
      };

      var fileName = _config["default"].sourcePath + "/App/Controllers/".concat(path, "/").concat(controllerName, ".js");

      _fs["default"].open(fileName, 'r', function (err, fd) {
        if (err) {
          _fs["default"].writeFile(fileName, content(), function (err) {
            if (err) throw err; // console.log('Saved!');
          });
        } else {
          throw new Error('File is already exist !');
        }
      });
    }
  }]);
  return Controller;
}();

var _default = Controller;
exports["default"] = _default;