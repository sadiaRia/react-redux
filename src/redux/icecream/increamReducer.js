import { buyIcecream } from './icecreamTypes';

const initialState = {
  noOfIcecream: 20
}

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyIcecream: return {
      ...state,
      noOfIcecream: state.noOfIcecream - 1
    }
    default: return {
      state
    }
  }
}

export default icecreamReducer;