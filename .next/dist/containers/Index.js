'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/iris/Documents/weather-app/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/iris/Documents/weather-app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _link = require('/Users/iris/Documents/weather-app/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/Users/iris/Documents/weather-app/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactLoading = require('react-loading');

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _actions = require('../actions');

var _geocodeSuggest = require('../components/geocode-suggest');

var _geocodeSuggest2 = _interopRequireDefault(_geocodeSuggest);

var _WeatherCard = require('../components/Weather-card');

var _WeatherCard2 = _interopRequireDefault(_WeatherCard);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page(props) {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          lat = _props.lat,
          lng = _props.lng,
          location = _props.location;

      this.props.fetchForeCast({ lat: lat, lng: lng, location: location });
    }
  }, {
    key: 'render',
    value: function render() {
      var wrapper = { paddingTop: '3em' };
      var blueText = { color: 'blue' };

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'utf-8' }), _react2.default.createElement('title', null, 'Seattle weather app'), _react2.default.createElement('meta', { name: 'weather-app', content: '' }), _react2.default.createElement('meta', { name: 'jlim', content: '' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: '//fonts.googleapis.com/css?family=Raleway:400,300,600', rel: 'stylesheet', type: 'text/css' }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDBC00bJRz6DF1Z2IPSaJHlpQOFMNhGXLw&libraries=places' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'css/normalize.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'css/skeleton.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'css/main.css' })), _react2.default.createElement('div', { className: 'container', style: wrapper }, _react2.default.createElement('p', null, (0, _moment2.default)().format('MM-DD-YYYY')), this.props.isFetching === true ? 'Fetching Data for:' : '', _react2.default.createElement(_geocodeSuggest2.default, { changeAddress: this.props.changeAddress,
        location: this.props.location,
        showLoadingIcon: this.props.showLoadingIcon,
        changeLocation: this.props.fetchForeCast }), _react2.default.createElement('div', { className: 'row' }, this.props.isFetching === true ? _react2.default.createElement(_reactLoading2.default, { type: 'balls', color: '#e3e3e3' }) : '')), _react2.default.createElement(_WeatherCard2.default, { data: this.props.foreCastData, isFetching: this.props.isFetching }));
    }
  }]);
  return Page;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    foreCastData: state.foreCastData,
    isFetching: state.isFetching,
    address: state.address,
    lat: state.lat,
    lng: state.lng,
    location: state.location
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  fetchForeCast: _actions.fetchForeCast,
  changeAddress: _actions.changeAddress,
  showLoadingIcon: _actions.showLoadingIcon
})(Page);