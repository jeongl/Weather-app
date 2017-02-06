export const reducers = (state = { 
  isFetching: true
}, action) => {
  switch (action.type) {
    case 'SERVER_LOAD':
      return Object.assign({}, state, {
        isFetching: true,
        lat: action.lat,
        lng: action.lng,
        location: action.location
      })
    case 'IS_FETCHING':
      return Object.assign({}, state, {
        isFetching: true
      })      
    case 'FETCH_FORECAST':
      return Object.assign({}, state, {
        isFetching: false,
        foreCastData: action.foreCastData,
        lat: action.lat,
        lng: action.lng
      })
    case 'CHANGE_ADDRESS':
      return Object.assign({}, state, {
        isFetching: false,
        location: action.address
      })      
    default: return state
  }
}
