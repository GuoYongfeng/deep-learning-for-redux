# 深入浅出redux应用

不要被各种关于 `reducers`、`middleware`、 `store` 的演讲所蒙蔽，`redux`的学习和应用，没有传说中的那么难，`redux` 的原理实际是非常简单的。当然，要用好，也没你想象的那么简单。

## 渐进式学习体系

### 1.redux 基础学习
- redux-01-introduction
- redux-02-simplest-example
- redux-03-simple-action-creator
- redux-04-about-state-and-meet-redux
- redux-05-simple-reducer
- redux-06-get-state
- redux-07-combine-reducers
- redux-08-dispatch-action
- redux-09-dispatch-async-action-1
- redux-10-dispatch-async-action-2
- redux-11-middleware
- redux-12-state-subscriber

### 2.redux 搭配 React

- redux-13-intro-of-react-redux
- redux-14-Smart-and-dump-compoennt
- redux-16-no-redux-app
- redux-17-connect-and-decorator
- redux-18-provider

### 3.基于 react 和 redux 的 TODO APP

- redux-19-todo-intro
- redux-20-create-entry-file
- redux-21-action-and-constant
- redux-22-reducers
- redux-23-containers-of-app
- redux-24-components-of-addtodo
- redux-25-components-of-footer
- redux-26-components-of-todo
- redux-27-components-of-todolist

### 4.redux 高级进阶

- redux-28-asyc-action
- redux-29-aync-data-flow
- redux-30-use-middleware
- redux-31-devtool

### 5.redux 搭配 react-router-redux 的应用开发

- redux-32-app-of-entry
- redux-33-app-of-action
- redux-34-app-of-reducers
- redux-35-containers-of-root
- redux-36-containers-of-asycapp
- redux-37-components-of-picker
- redux-38-components-of-posts

## 从MVC到FLUX来理解redux

### 1. MVC

在学习redux前，一起回顾一下我们熟悉的MVC架构模式

![enter image description here](https://sfault-image.b0.upaiyun.com/421/317/4213171098-57c2d33673cb3_articlex)

- model负责保存应用数据，和后端交互同步应用数据
- view是model的可视化表示，表示当前状态的视图
- controller负责连接view和model

随着项目的复杂度提升，混乱的数据流动也随着开始了。
![enter image description here](http://htmljs.b0.upaiyun.com/uploads/1421067671341-4.jpeg)

- view 层可以随意改变model中的值
- view 层也可以随意监听model中值的变化
- 某个model值改变，可能会触发多个view的数据change
- 而且，model和model之间值也可以相互改变，混乱的数据流动变得更加糟糕，变得更不可维护。

### 2. flux

Flux是一种架构思想，同时，社区也有很多为了实现这种架构思想的类库。

一个flux应用由三大部分组成：dispatcher、store、view。

- dispatcher负责分发事件
- store负责保存应用数据，并响应事件后更新数据
- view订阅store中的数据，并将数据渲染到相应页面
- 还有存在controller-view这样的角色，只负责将view和数据store进行绑定


![enter image description here](https://sfault-image.b0.upaiyun.com/740/634/740634959-57c2d3757a577_articlex)

好处：
- 分而治之 - 组件化拆分，数据流动单向可预测
- 合而治之 - 中心化控制

当项目复杂起来之后。

![enter image description here](https://d262ilb51hltx0.cloudfront.net/max/1960/1*ICpUjYrHJa9TdIDwEIhooQ.jpeg)

- 新架构模式本身存在的一些缺陷
- 代码冗余，编写代码的方式比较僵硬，模板化

### 3. redux

目前应用最广泛的flux思想实现的应用状态管理库，开源社区应用最火的前端应用架构。

![enter image description here](https://sfault-image.b0.upaiyun.com/247/571/247571924-57c2d38184f10_articlex)

- 单一数据源，整个应用数据只保存在一个store中
- store中的状态是只读的，惟一改变 state 的方法就是触发 action
- 使用纯函数来执行应用状态的修改，即定义reducer来修改状态，每个reducer都是纯函数

## 搭建开发环境

启动脚手架
```
$ git clone git@github.com:GuoYongfeng/starter.git
$ cd starter && npm install
$ npm start
```

其他方式：
- 或者使用create-react-app
- 使用redux的CDN：http://cdn.bootcss.com/redux/3.5.2/redux.min.js

## redux 快速入门

```
$ npm install redux --save
```

通过实现一个counter计数功能的栗子来理解redux的三个概念：
- action
- reducer
- store

## redux API

```
applyMiddleware: applyMiddleware()

bindActionCreators: bindActionCreators(actionCreators, dispatch)

combineReducers: combineReducers(reducers)

compose: compose()

createStore: createStore(reducer, preloadedState, enhancer)
```
## store API

store API
```
dispatch: dispatch(action)

getState: getState()

replaceReducer:replaceReducer(nextReducer)

subscribe: subscribe(listener)

Symbol(observable): observable()
```

## subscribe 数据监听

store.subscribe

## action creator

```
const actionCreator = ( info, id ) => {
  return {
    type: info,
    id: id
  }
}

store.dispatch( actionCreator("INCREMENT", 9) )
```

## redux 和 react 绑定使用

> 说明：redux深入部分的内容暂时先不多做讲解，比如middleware、异步数据流等，我们先搞定react和redux的结合使用，看到示例效果更有趣。

redux库的核心只提供createStore，仅仅这样还无法应用到项目中，我们还需要使用 `react-redux` 来实现数据和ui的绑定，

```
$ npm install react-redux --save
```

FAQ：明明有了redux，为什么还需要react-redux？

- 类库核心与平台实现相分离，保证redux的核心功能做到最大程度的跨平台复用。

**react-redux只提供一个组件和一个API实现连接**
- `<Provider />`是整个redux应用的顶层组件
```
<Provider store={store}>
	<RootApp />
</Provider>
```
- `connect()`让整个应用中的任意组件都可以获取store中的数据
```
connect(mapStateToProps, mapDispatchToProps, mergeProps, options ={})
```

## 实践操作：实现一个计数器

- react
- redux
- react-redux


## 终于等到你：middleware 中间件

在express和koa等nodejs框架中，middleware指可以被嵌入在框架接收请求到产生响应过程中的代码，从而可以实现记录日志log、内容压缩等工作，而其实redux就是借鉴了koa的middleware的思想。

```
// express middleware
var loggerMiddleware = function(req, res, next) {
  console.log('[Logger]', req.method, req.originalUrl)
  next()
}
...
app.use(loggerMiddleware)

// 效果
[Logger] GET  /
[Logger] POST /login
[Logger] GET  /user?uid=123456

```

所以，在redux中，middleware其实是给我们提供了一个分类处理action的机会，可以在middleware中检阅每个流过的action，并挑选特定的action进行处理。

> **说人话：**Redux 引入中间件机制其实就是为了在 dispatch 前后，**统一“做想做的事情”**，诸如统一的日志记录、引入 thunk 统一处理异步 Action Creator 等都属于中间件。

**要点：**
- 理解函数式编程
- 理解redux中的applyMiddleware这个API

## 如何学习middle中间件

**步骤拆解：**

1. 理解compose、curry、higher-order几个函数式编程概念
- 关于函数式编程的理解，我们有对应的系列视频课程可供学习理解
- 也可参考我写的部分讲义内容：https://github.com/GuoYongfeng/js-functional-program
2. applymiddleware源码初探和redux-logger这个middleware的使用
3. 进一步探索applymiddleware的源码
4. 学会如何定义一个middleware中间件
5. 实战：使用redux-thunk中间件实现异步action操作

## applyMiddleware源码初探和redux-logger这个middleware的使用

- `applyMiddleware` 和 `createStore` 源码初步分析
- 使用 `redux-logger` 中间件实现前端 `log` 日志打印功能

## 进一步探索applyMiddleware的源码

> 短短十几行的代码，营养很高

QA：applyMiddleware这个API都涉及哪些知识

- spread 多参数传递
- 箭头函数
- compose 函数的组合
- higher-order 高阶函数
- chain 链式定义
- curry 柯里化

QA：applyMiddleware做了哪些操作

## 定义一个自己的middleware中间件

> 写一个自己的logger中间件，记录每一步操作的信息

```
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

```

## 实战：使用redux-thunk中间件实现异步action操作

> 需求：实现一个异步action的功能场景：**点击加1按钮的时候，延迟2秒再执行**

- `redux-thunk` 的使用
-  `action` 如何定义

redux-thunk源码分析：

```
function createThunkMiddleware(extraArgument) {

  return ({ dispatch, getState }) => next => action => {
	 // fn(){}
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

	// {}
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

## middleware部分的收尾工作

- 上一部分示例的log问题
- 目录结构优化
- middleware 的运用还不远不止这些，后面我们边学边用
	- redux-thunk — 用最简单的方式搭建异步 action 构造器
	- redux-promise — 遵从 FSA 标准的 promise 中间件
	- redux-axios-middleware — 使用 axios HTTP 客户端获取数据的 Redux 中间件
	- redux-observable — Redux 的 RxJS 中间件
	- redux-rx — 给 Redux 用的 RxJS 工具，包括观察变量的中间件
	- redux-logger — 记录所有 Redux action 和下一次 state 的日志
	- redux-immutable-state-invariant — 开发中的状态变更提醒
	- redux-unhandled-action — 开发过程中，若 Action 未使 State 发生变化则发出警告
	- redux-analytics — Redux middleware 分析
	- redux-gen — Redux middleware 生成器
	- redux-saga — Redux 应用的另一种副作用 model
	- redux-action-tree — Redux 的可组合性 Cerebral-style 信号
	- apollo-client — 针对 GraphQL 服务器及基于 Redux 的 UI 框架的缓存客户端


## redux-devtools 超棒的调试工具

### how to

```
$ npm install redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor --save-dev
$ touch src/container/DevTools.js
```

`src/container/DevTools.js`
```
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor />
  </DockMonitor>
);
```

注意点：

一定要区分开发环境和生产环境，不可将devtool组件用于线上生产环境，所以代码打包的时候就要做区分。

## 区分开发环境和生产环境

**涉及到的知识点：**
- process.env.NODE_ENV 环境变量
- npm scripts
- cross-env package
- webpack.DefinePlugin 插件定义全局变量

## react-router-redux 将路由信息和store绑定

QA：有了react-router为什么还要react-router-redux？

实现store里的应用状态和路由信息同步

```
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)
```
