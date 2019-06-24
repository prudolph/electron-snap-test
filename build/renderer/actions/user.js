"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxActions = require("redux-actions");

var _default = {
  login: (0, _reduxActions.createAction)('USER_LOGIN'),
  logout: (0, _reduxActions.createAction)('USER_LOGOUT')
};
exports["default"] = _default;