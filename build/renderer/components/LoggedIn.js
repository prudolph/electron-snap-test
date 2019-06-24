"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

class LoggedIn extends _react.Component {
  constructor(...args) {
    super(...args);

    this.handleLogout = () => {
      this.props.onLogout({
        username: '',
        loggedIn: false
      });
    };
  }

  render() {
    return _react["default"].createElement("div", null, _react["default"].createElement("h2", null, "Logged in as ", this.props.user.username), _react["default"].createElement("button", {
      onClick: this.handleLogout
    }, "Logout"));
  }

}

exports["default"] = LoggedIn;
LoggedIn.propTypes = {
  onLogout: _propTypes["default"].func.isRequired
};