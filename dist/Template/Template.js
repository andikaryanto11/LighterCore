"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CsrfToken = _interopRequireDefault(require("./CsrfToken"));

var _Language = _interopRequireDefault(require("./Language"));

var Template = function Template() {
  var csrfToken = (0, _CsrfToken["default"])();
  var lang = _Language["default"];
  return {
    csrfToken: csrfToken,
    lang: lang
  };
};

var _default = Template;
exports["default"] = _default;