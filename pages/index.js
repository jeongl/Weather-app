import React from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore, startClock } from '../store'
import Page from '../containers/Index'

export default class Counter extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    store.dispatch({ type: 'SERVER_LOAD',  
      isFetching: true, lat: '47.6062095', 
      lng: '-122.3320708', location: 'Seattle, WA' 
    });

    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Page title='Index Page' />
      </Provider>
    )
  }
}