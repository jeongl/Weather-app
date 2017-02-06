'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('/Users/iris/Documents/weather-app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var cardWrapper = {
	color: 'grey',
	border: '1px solid #bbb',
	width: '135px',
	textAlign: 'center',
	borderRadius: '5px',
	padding: '10px 0 10px 0'
};

var dayStyle = {
	fontSize: '20px',
	color: 'light-blue',
	textDecoration: 'underline'
};

var summary = {
	padding: '7px',
	paddingTop: '20px',
	color: 'blue'
};

var apiLink = {
	paddingTop: '2em'
};

exports.default = function (_ref) {
	var data = _ref.data,
	    isFetching = _ref.isFetching;

	if (!data || isFetching) return false;else data = data.daily.data;

	return _react2.default.createElement('div', { className: 'container main' }, _react2.default.createElement('section', { className: 'services' }, _react2.default.createElement('div', { className: 'row' }, data.map(function (item, i) {
		return _react2.default.createElement('div', { className: 'two columns card', key: i, style: cardWrapper }, _react2.default.createElement('div', { className: 'row card' }, _react2.default.createElement('h2', { style: dayStyle }, item.day), _react2.default.createElement('p', null, _react2.default.createElement('img', { src: item.iconLink })), _react2.default.createElement('p', { className: 'min' }, 'Min-temp: ', Math.round(item.temperatureMin), '\xB0'), _react2.default.createElement('p', { className: 'max' }, 'Max-temp: ', Math.round(item.temperatureMax), '\xB0'), _react2.default.createElement('p', { className: 'summary', style: summary }, 'Summary: ', item.summary), _react2.default.createElement('style', { jsx: true }, ' p { margin-bottom: 0; } '), _react2.default.createElement('style', { jsx: true }, ' \n\t\t\t\t          \t.row > .card > .more-cards:hover { color: black; } \n\t\t\t\t          ')), _react2.default.createElement('style', { jsx: true }, ' \n\t\t\t          \tdiv > .card:hover { color: black; } \n\t\t\t          '));
	}))), _react2.default.createElement('div', { className: 'row', style: apiLink }, _react2.default.createElement('a', { href: 'https://darksky.net/poweredby/' }, 'Powered by Dark Sky')));
};