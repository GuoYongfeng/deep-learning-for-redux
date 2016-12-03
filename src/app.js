import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import RootApp from './containers/RootApp'
import DevTools from './containers/DevTools'

let root = document.getElementById('app')

let node

if ( __DEV__ ){
  node = (
    <div>
      <DevTools />
      <RootApp />
    </div>
  )
}

if ( __PROD__ ){
  node = <RootApp />
}

render(
  <Provider store={ store }>
    { node }
  </Provider>, root )
