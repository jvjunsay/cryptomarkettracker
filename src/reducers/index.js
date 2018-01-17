import { combineReducers } from 'redux'
import AuthReducer from './AuthReducers'
import CMCReducer from './CMCReducers'

export default combineReducers({
  auth: AuthReducer,
  cmc: CMCReducer
})
