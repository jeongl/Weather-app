'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.startClock = exports.reducer = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('./reducers');

var _api = require('./middleware/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = (0, _reduxLogger2.default)();

var reducer = exports.reducer = _reducers.reducers;

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: 'TICK', light: true, ts: Date.now() });
    }, 800);
  };
};

var store = void 0;

var initStore = exports.initStore = function initStore(reducer, initialState, isServer) {
  if (isServer && typeof window === 'undefined') {
    console.log('isServer:');
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxPromise2.default, _api2.default));
  } else {
    if (!store) {
      console.log('!isServer');
      store = (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxPromise2.default, _api2.default));
    }
    return store;
  }
};