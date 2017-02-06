'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/iris/Documents/weather-app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../store');

var _Index = require('../containers/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);
  (0, _createClass3.default)(Counter, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(_store.reducer, null, isServer);
      store.dispatch({ type: 'SERVER_LOAD',
        isFetching: true, lat: '47.6062095',
        lng: '-122.3320708', location: 'Seattle, WA'
      });

      return { initialState: store.getState(), isServer: isServer };
    }
  }]);

  function Counter(props) {
    (0, _classCallCheck3.default)(this, Counter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

    _this.store = (0, _store.initStore)(_store.reducer, props.initialState, props.isServer);
    return _this;
  }

  (0, _createClass3.default)(Counter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRedux.Provider, { store: this.store }, _react2.default.createElement(_Index2.default, { title: 'Index Page' }));
    }
  }]);
  return Counter;
}(_react2.default.Component);

exports.default = Counter;