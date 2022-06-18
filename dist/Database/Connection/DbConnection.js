"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _Database = _interopRequireDefault(require("../../../App/Config/Database.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config;
var DbConnection = (0, _knex["default"])(_Database["default"][process.env.APP_MODE]);
var _default = DbConnection;
exports["default"] = _default;