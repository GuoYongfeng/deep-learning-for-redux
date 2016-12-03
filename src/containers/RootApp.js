import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter/Counter'
import { Inc, Dec } from '../components/Counter/CounterRedux'

// connect() 返回的还是一个function
// connect()( 参数是我们的组件 )，返回值依然是一个组件
// RootApp 被链接之后的组件
// 高阶组件

// 1. 延迟2秒 return action
// 2. return function，提示：Actions must be plain objects. Use custom middleware for async actions.
// 3. redux-thunk; 定义的action -> function, 接受的参数：dispatch, getState

const RootApp = connect(
  ( state ) => {
    return {
      value: state
    }
  }, ( dispatch ) => {
    return {
      onIncrement: () => dispatch( Inc() ),
      onDecrement: () => dispatch( Dec() )
    }
  } )( Counter )

export default RootApp
