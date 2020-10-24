import { SELECT_PART_ID, UPDATE_PARTS } from '../actions'

const initialState = {
  listParts: [],
  selectPartId: undefined,
  /*...*/
}

/**
 * Reducer
 */
const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARTS:
      return {
        ...state,
        listParts: action.parts,
      }
    case SELECT_PART_ID:
      return {
        ...state,
        selectPartId: action.partId,
      }
    default:
      return state
  }
}

export default partReducer
