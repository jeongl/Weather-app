'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/iris/Documents/weather-app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var apiLink = { paddingTop: '2em' };

exports.default = function (_ref) {
  var data = _ref.data,
      isFetching = _ref.isFetching;

  if (!data || isFetching) return false;else data = data.daily.data;

  return _react2.default.createElement('div', { className: 'container main' }, _react2.default.createElement('section', { className: 'services' }, _react2.default.createElement('div', { className: 'row' }, data.map(function (item, i) {
    return _react2.default.createElement('div', { className: 'two columns cardWrapper', key: i }, _react2.default.createElement('div', { className: 'row card' }, _react2.default.createElement('h2', null, item.day), _react2.default.createElement('p', null, _react2.default.createElement('img', { src: item.iconLink })), _react2.default.createElement('p', { className: 'min' }, 'Min-temp: ', Math.round(item.temperatureMin), '\xB0'), _react2.default.createElement('p', { className: 'max' }, 'Max-temp: ', Math.round(item.temperatureMax), '\xB0'), _react2.default.createElement('p', { className: 'summary' }, 'Summary: ', item.summary)));
  }))), _react2.default.createElement('div', { className: 'row', style: apiLink }, _react2.default.createElement('a', { href: 'https://darksky.net/poweredby/' }, 'Powered by Dark Sky')));
};