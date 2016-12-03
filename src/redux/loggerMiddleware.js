const loggerMiddleware = store => next => action => {
  const dispatch = store.dispatch
  const getState = store.getState

  console.group( action.type )
  console.log('dispatching: ', action)
  console.log('previous state: ', getState())

  let res = next(action)

  console.log('next state: ', getState())
  console.groupEnd(action.type)

  return res
}

export default loggerMiddleware
