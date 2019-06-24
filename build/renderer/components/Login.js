"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

class Login extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: ''
    };

    this.handleLogin = () => {
      this.props.onLogin({
        username: this.state.username,
        loggedIn: true
      });
    };

    this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    };
  }

  render() {
    return _react["default"].createElement("div", null, _react["default"].createElement("h2", null, "Login"), _react["default"].createElement("input", {
      onChange: this.handleChange,
      type: "text",
      value: this.state.username
    }), _react["default"].createElement("button", {
      onClick: this.handleLogin
    }, "Log In"));
  }

}

exports["default"] = Login;
Login.propTypes = {
  onLogin: _propTypes["default"].func.isRequired
};