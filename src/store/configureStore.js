import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'

import reducers from './reducers'

const __DEBUG__ = process.env.NODE_ENV !== 'production'

// Grab the state from a global injected into server-generated HTML.
const initialState = window.__INITIAL_STATE__

export default function() {
  // Enables the use of push() for redirects.
  const router = routerMiddleware(browserHistory)

  const middlewares = [
    thunk,
    router,
  ]

  // Logger in debug mode.
  if (__DEBUG__) {
    const createLogger = require('redux-logger')
    const logger = createLogger()
    middlewares.push(logger)
  }

  let middleware = applyMiddleware(...middlewares)

  // Redux devtools in debug mode.
  if (__DEBUG__ && !!window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension())
  }

  const store = createStore(reducers, initialState, middleware)

  // Hot replacement for Redux.
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers').default
      store.replaceReducer(nextReducers)
    })
  }

  return store
}
