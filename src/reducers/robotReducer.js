import { UPDATE_ROBOTS } from '../actions'

const initialState = {
  robots: [],
  /*...*/
}

/**
 * Reducer
 */
const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROBOTS:
      // state is immutable, you must create a new object with another reference
      return {
        ...state,
        robots: action.robots,
      }
    default:
      return state
  }
}

export default robotReducer