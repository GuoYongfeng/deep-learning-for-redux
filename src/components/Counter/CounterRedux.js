export function Inc(){
  return (dispatch, getState) => {
    setTimeout(function(){
      dispatch({ type: "INCREMENT" })
    }, 2000)
  }
}

export function Dec(){
  return { type: "DECREMENT" }
}

export function counter( count = 0, action ) {
  switch ( action.type ) {
    case "INCREMENT":
      return count + 1
    case "DECREMENT":
      return count - 1
    default:
      return count
  }
}
