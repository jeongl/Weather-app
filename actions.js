export const FETCH_FORECAST = 'FETCH_FORECAST'
export const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
export const IS_FETCHING = 'IS_FETCHING'

export const fetchForeCast = ({lat, lng, location}) => ({
    type: FETCH_FORECAST,
    lat,  lng, location,
    isFetching: true
});

export const showLoadingIcon = () => ({
	type: IS_FETCHING
});

export const changeAddress = (address) => ({
    type: CHANGE_ADDRESS,
    address: address
});