"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _history = require("history");

var _routes = _interopRequireDefault(require("./routes"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const syncHistoryWithStore = (store, history) => {
  const {
    router
  } = store.getState();

  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {};
const routerHistory = (0, _history.createMemoryHistory)();
const store = (0, _store["default"])(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

_reactDom["default"].render(_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_connectedReactRouter.ConnectedRouter, {
  history: routerHistory
}, _routes["default"])), rootElement);