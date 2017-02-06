import fetch from 'isomorphic-fetch';
import moment from 'moment';
import _ from 'lodash'
let imgPath = '/climacons/'

export const addIconLink = (data) => imgPath.concat(({
  'clear-day': `Cloud-Sun.svg`,
  'clear-night': `Cloud-Moon.svg`,
  'rain': `Cloud-Rain.svg`,
  'snow': `Cloud-Snow.svg`,
  'sleet': `Cloud-Hail.svg`,
  'wind': `Cloud-Wind.svg`,
  'fog': `Cloud-Fog.svg`,
  'cloudy': `Cloud.svg`,
  'partly-cloudy-day': `Cloud-Sun.svg`,
  'partly-cloudy-night': `Cloud-Moon.svg`,
}[data] || `Cloud-Sun.svg`));

export const addProperties = (data) => {
  let modified = _.cloneDeep(data.daily.data);

  modified.map(item => _.extend(item, {
    day: moment.unix(item.time).format('dddd'),
    dateFormat: moment.unix(item.time).format('MMM-DD-YYYY'),
    iconLink: addIconLink(item.icon)
  }));

  data.daily.data = modified.filter((item, i) => i<=4);
  return data;
}

function fetchForecast (store, next, {type, lat, lng}) {
  fetch(`/fetchForecast/${lat}/${lng}`).then(resp => 
    resp.json().then(data => next({
      type: type,
      foreCastData: addProperties(data),
      lat, lng,
      isFetching: true
    })
  ));
}

export default store => next => action => {
  if (action.type === 'FETCH_FORECAST') {
    return fetchForecast.apply(this, [store, next, action]);
  } else next(action);
}