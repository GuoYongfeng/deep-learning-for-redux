

const middlewareDemo = store => next => action => {

  console.log( action )
}

export default middlewareDemo
