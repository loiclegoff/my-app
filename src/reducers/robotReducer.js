import { UPDATE_ROBOTS } from '../actions'

const initialState = {
    listRobots: [],
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
        listRobots: action.robots,
      }
    default:
      return state
  }
}

export default robotReducer