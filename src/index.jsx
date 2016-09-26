import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import configureStore from './store/configureStore'
import Root from './Root'

const store = configureStore()

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
)

// Hot replacements for React.
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
