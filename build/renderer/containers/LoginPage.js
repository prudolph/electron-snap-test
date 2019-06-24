"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _redux = require("redux");

var _Login = _interopRequireDefault(require("../components/Login"));

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user["default"], dispatch);
  return {
    onLogin: data => {
      user.login(data);
      dispatch((0, _connectedReactRouter.push)('/loggedin'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login["default"]);

exports["default"] = _default;