import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'

import {reducer as app} from '../App'

export default combineReducers({
  routing,
  app,
})
