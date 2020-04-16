import { buyCake } from './cakeTypes';

const initialState = {
  noOfCake = 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyCake: return {
      ...state,
      noOfCake = state.noOfCake - 1
    }
    default: return state
  }
}

export default cakeReducer;