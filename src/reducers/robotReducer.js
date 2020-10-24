import { SELECT_ROBOT_ID, UPDATE_ROBOTS } from '../actions'

const initialState = {
  listRobots: [],
  selectRobotId: undefined,
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
    case SELECT_ROBOT_ID:
      return {
        ...state,
        selectRobotId: action.robotId,
      }
    default:
      return state
  }
}

export default robotReducer
