"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxActions = require("redux-actions");

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _reduxActions.handleActions)({
  [_user["default"].login]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  },
  [_user["default"].logout]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  }
}, {});

exports["default"] = _default;