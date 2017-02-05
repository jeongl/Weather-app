import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();

export const reducer = (state = { 
  lastUpdate: 0, 
  light: false 
}, action) => {
  switch (action.type) {
    case 'TICK':
      return Object.assign({}, state, {
        lastUpdate: action.ts, 
        light: !!action.light 
      })
    case 'FETCH_FORECAST':
      return Object.assign({}, state, {
        lastUpdate: action.ts, 
        light: !!action.light 
      })
    default: return state
  }
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

let store = null

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    console.log('isServer:')
    return createStore(reducer, initialState, applyMiddleware(thunk, promise, logger))
  } else {
    if (!store) {
      console.log('!isServer');
      store = createStore(reducer, initialState, applyMiddleware(thunk, promise, logger))
    }
    return store
  }
}