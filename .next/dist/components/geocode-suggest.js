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

var _reactPlacesAutocomplete = require('react-places-autocomplete');

var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var GeoCodeSuggest = function (_Component) {
  (0, _inherits3.default)(GeoCodeSuggest, _Component);

  function GeoCodeSuggest() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GeoCodeSuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GeoCodeSuggest.__proto__ || (0, _getPrototypeOf2.default)(GeoCodeSuggest)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (address) {
      _this.props.changeAddress(address);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GeoCodeSuggest, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var address = this.props.location;

      (0, _reactPlacesAutocomplete.geocodeByAddress)(address, function (err, _ref2) {
        var lat = _ref2.lat,
            lng = _ref2.lng;

        if (err) {
          throw new Error(err);
        }
        _this2.props.showLoadingIcon();

        _this2.props.changeLocation({
          lat: lat,
          lng: lng,
          location: _this2.props.location
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var locationStyle = { color: 'blue' };

      return _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('form', { onSubmit: this.handleFormSubmit.bind(this) }, _react2.default.createElement('h2', { style: locationStyle }, this.props.location), _react2.default.createElement(_reactPlacesAutocomplete2.default, {
        value: this.props.location,
        onChange: this.onChange
      }), _react2.default.createElement('button', { type: 'submit' }, 'Submit')));
    }
  }]);
  return GeoCodeSuggest;
}(_react.Component);

exports.default = GeoCodeSuggest;