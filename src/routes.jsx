import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import { Home } from './Home'
import Features from './Features'
import Pricing from './Pricing'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="features" component={Features} />
    <Route path="pricing" component={Pricing} />
  </Route>
)
