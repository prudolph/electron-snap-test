"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = require("redux");

var _connectedReactRouter = require("connected-react-router");

var _reduxLocalstorage = _interopRequireDefault(require("redux-localstorage"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _user = _interopRequireDefault(require("./reducers/user"));

var _user2 = _interopRequireDefault(require("./actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configureStore(initialState, routerHistory) {
  const router = (0, _connectedReactRouter.routerMiddleware)(routerHistory);
  const actionCreators = { ..._user2["default"],
    push: _connectedReactRouter.push
  };
  const reducers = {
    router: (0, _connectedReactRouter.connectRouter)(routerHistory),
    user: _user["default"]
  };
  const middlewares = [_reduxThunk["default"], router];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({
        actionCreators
      });
    }

    return _redux.compose;
  })();

  const enhancer = composeEnhancers((0, _redux.applyMiddleware)(...middlewares), (0, _reduxLocalstorage["default"])());
  const rootReducer = (0, _redux.combineReducers)(reducers);
  return (0, _redux.createStore)(rootReducer, initialState, enhancer);
}