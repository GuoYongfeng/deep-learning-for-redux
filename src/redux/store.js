import { createStore, applyMiddleware, compose } from 'redux'

import createLogger from 'redux-logger'
import middlewareDemo from './middlewareDemo'
import loggerMiddleware from './loggerMiddleware'
import thunk from 'redux-thunk'

import { counter } from '../components/Counter/CounterRedux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)
// applyMiddleware 第一种用法
const store = createStore(
  counter,
  enhancer
)

//

// applyMiddleware 第二种用法
// const finalCreateStore = applyMiddleware( createLogger() )(createStore);
//
// const store = finalCreateStore( counter )

export default store
