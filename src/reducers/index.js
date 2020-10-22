import { combineReducers } from 'redux'
import robotReducer from './robotReducer'
import partReducer from './partReducer'

const globalReducer = combineReducers({
  robot: robotReducer,
  part: partReducer,
})

export default globalReducer
