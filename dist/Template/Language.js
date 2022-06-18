"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Session = _interopRequireDefault(require("../Http/Session"));

var _FileLoader = _interopRequireDefault(require("../Libraries/FileLoader"));

_dotenv["default"].config();

var Language = function Language(string) {
  var session = _Session["default"].getInstance();

  var appLanguage = session.userlanguage == null ? session.language : session.userlanguage;
  var file = string.split('.');
  var json = new _FileLoader["default"]("/App/Language/".concat(appLanguage, "/").concat(file[0], ".json")).getData();
  return json[file[1]];
};

var _default = Language;
exports["default"] = _default;