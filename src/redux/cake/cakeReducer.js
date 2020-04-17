import { buyCake } from './cakeTypes';

const initialState = {
  noOfCake: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyCake: return {
      ...state,
      noOfCake: state.noOfCake - action.payload
    }
    default: return state
  }
}

export { cakeReducer };