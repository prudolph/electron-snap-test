"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _LoginPage = _interopRequireDefault(require("./containers/LoginPage"));

var _LoggedInPage = _interopRequireDefault(require("./containers/LoggedInPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _react["default"].createElement(_reactRouter.Switch, null, _react["default"].createElement(_reactRouter.Route, {
  exact: true,
  path: "/",
  component: _LoginPage["default"]
}), _react["default"].createElement(_reactRouter.Route, {
  exact: true,
  path: "/loggedin",
  component: _LoggedInPage["default"]
}));

exports["default"] = _default;