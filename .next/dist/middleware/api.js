'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addProperties = exports.addIconLink = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var imgPath = '/climacons/';

var addIconLink = exports.addIconLink = function addIconLink(data) {
	return imgPath.concat({
		'clear-day': 'Cloud-Sun.svg',
		'clear-night': 'Cloud-Moon.svg',
		'rain': 'Cloud-Rain.svg',
		'snow': 'Cloud-Snow.svg',
		'sleet': 'Cloud-Hail.svg',
		'wind': 'Cloud-Wind.svg',
		'fog': 'Cloud-Fog.svg',
		'cloudy': 'Cloud.svg',
		'partly-cloudy-day': 'Cloud-Sun.svg',
		'partly-cloudy-night': 'Cloud-Moon.svg'
	}[data] || 'Cloud-Sun.svg');
};

var addProperties = exports.addProperties = function addProperties(data) {
	var modified = _lodash2.default.cloneDeep(data.daily.data);

	modified.map(function (item) {
		return _lodash2.default.extend(item, {
			day: _moment2.default.unix(item.time).format('dddd'),
			dateFormat: _moment2.default.unix(item.time).format('MMM-DD-YYYY'),
			iconLink: addIconLink(item.icon)
		});
	});

	data.daily.data = modified.filter(function (item, i) {
		return i <= 4;
	});
	return data;
};

function fetchForecast(store, next, _ref) {
	var type = _ref.type,
	    lat = _ref.lat,
	    lng = _ref.lng;

	(0, _isomorphicFetch2.default)('/fetchForecast/' + lat + '/' + lng).then(function (resp) {
		return resp.json().then(function (data) {
			return next({
				type: type,
				foreCastData: addProperties(data),
				lat: lat, lng: lng,
				isFetching: true
			});
		});
	});
}

exports.default = function (store) {
	return function (next) {
		return function (action) {
			if (action.type === 'FETCH_FORECAST') {
				return fetchForecast.apply(undefined, [store, next, action]);
			} else next(action);
		};
	};
};