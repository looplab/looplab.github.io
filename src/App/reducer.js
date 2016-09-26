import {createAction, handleActions} from 'redux-actions'
import {LOCATION_CHANGE} from 'react-router-redux'

export const SHOW_SIDEBAR = 'SHOW_SIDEBAR'
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR'

export const showSidebar = createAction(SHOW_SIDEBAR)
export const hideSidebar = createAction(HIDE_SIDEBAR)

export const actions = {
  showSidebar,
  hideSidebar,
}

const initialState = {
  sidebarVisible: false
}

export const reducer = handleActions({
  [SHOW_SIDEBAR]: (state, action) => ({
    ...state,
    sidebarVisible: true
  }),
  [HIDE_SIDEBAR]: (state, action) => ({
    ...state,
    sidebarVisible: false
  }),
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    sidebarVisible: false
  })
}, initialState)
