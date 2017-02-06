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

var _style = require('/Users/iris/Documents/weather-app/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/iris/Documents/weather-app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/iris/Documents/weather-app/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      var statusCode = this.props.statusCode;

      var title = statusCode === 404 ? 'This page could not be found' : statusCode ? 'Internal Server Error' : 'An unexpected error has occurred';

      return _react2.default.createElement('div', { className: 'error', 'data-jsx': 676398231
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', 'data-jsx': 676398231
      })), _react2.default.createElement('div', {
        'data-jsx': 676398231
      }, statusCode ? _react2.default.createElement('h1', {
        'data-jsx': 676398231
      }, statusCode) : null, _react2.default.createElement('div', { className: 'desc', 'data-jsx': 676398231
      }, _react2.default.createElement('h2', {
        'data-jsx': 676398231
      }, title, '.'))), _react2.default.createElement(_style2.default, {
        styleId: 3608526279,
        css: '\n        body { margin: 0 }\n      '
      }), _react2.default.createElement(_style2.default, {
        styleId: 965400277,
        css: '.error[data-jsx="676398231"] {color: #000;background: #fff;font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;height: 100vh;text-align: center;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;}.desc[data-jsx="676398231"] {display: inline-block;text-align: left;line-height: 49px;height: 49px;vertical-align: middle;}h1[data-jsx="676398231"] {display: inline-block;border-right: 1px solid rgba(0, 0, 0,.3);margin: 0;margin-right: 20px;padding: 10px 23px 10px 0;font-size: 24px;font-weight: 500;vertical-align: top;}h2[data-jsx="676398231"] {font-size: 14px;font-weight: normal;margin: 0;padding: 0;}'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;