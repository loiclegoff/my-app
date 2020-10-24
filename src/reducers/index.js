import { combineReducers } from 'redux'
import partReducer from './partReducer'
import robotReducer from './robotReducer'

export const globalReducer = combineReducers({
  robotReducer,
  partReducer,
})
