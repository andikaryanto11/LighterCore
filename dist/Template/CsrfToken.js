"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Request = _interopRequireDefault(require("../Http/Request"));

var CsrfToken = function CsrfToken() {
  if (process.env.CSRF_UASEGE == 'true') {
    var request = _Request["default"].getInstance().getRequest();

    return "<input hidden name=\"_csrf\" value=\"".concat(request.csrfToken(), "\"/>");
  } else {
    return null;
  }
};

var _default = CsrfToken;
exports["default"] = _default;