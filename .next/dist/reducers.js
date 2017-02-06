'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _assign = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var reducers = exports.reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments[1];

  switch (action.type) {
    case 'SERVER_LOAD':
      return (0, _assign2.default)({}, state, {
        isFetching: true,
        lat: action.lat,
        lng: action.lng,
        location: action.location
      });
    case 'IS_FETCHING':
      return (0, _assign2.default)({}, state, {
        isFetching: true
      });
    case 'FETCH_FORECAST':
      return (0, _assign2.default)({}, state, {
        isFetching: false,
        foreCastData: action.foreCastData,
        lat: action.lat,
        lng: action.lng
      });
    case 'CHANGE_ADDRESS':
      return (0, _assign2.default)({}, state, {
        isFetching: false,
        location: action.address
      });
    default:
      return state;
  }
};