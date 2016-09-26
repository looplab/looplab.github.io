import React from 'react'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import routes from './routes'

export default function Root(props) {
  // Create an enhanced history that syncs navigation events with the store.
  const history = syncHistoryWithStore(browserHistory, props.store)

  return (
    <Provider store={props.store}>
      <Router history={history} routes={routes} />
    </Provider>
  )
}
