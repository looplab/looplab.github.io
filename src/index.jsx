import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import configureStore from './store/configureStore'
import Root from './Root'

const store = configureStore()
// Create an enhanced history that syncs navigation events with the store.
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

// Hot replacements for React.
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
