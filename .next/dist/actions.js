'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_FORECAST = exports.FETCH_FORECAST = 'FETCH_FORECAST';
var CHANGE_ADDRESS = exports.CHANGE_ADDRESS = 'CHANGE_ADDRESS';
var IS_FETCHING = exports.IS_FETCHING = 'IS_FETCHING';

var fetchForeCast = exports.fetchForeCast = function fetchForeCast(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng,
      location = _ref.location;
  return {
    type: FETCH_FORECAST,
    lat: lat, lng: lng, location: location,
    isFetching: true
  };
};

var showLoadingIcon = exports.showLoadingIcon = function showLoadingIcon() {
  return {
    type: IS_FETCHING
  };
};

var changeAddress = exports.changeAddress = function changeAddress(address) {
  return {
    type: CHANGE_ADDRESS,
    address: address
  };
};