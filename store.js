import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { reducers } from './reducers'
import api from './middleware/api'

const logger = createLogger();

export const reducer = reducers

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

let store;

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    console.log('isServer:')
    return createStore(reducer, initialState, applyMiddleware(thunk, promise, api))
  } else {
    if (!store) {
      console.log('!isServer');
      store = createStore(reducer, initialState, applyMiddleware(thunk, promise, api))
    }
    return store
  }
}