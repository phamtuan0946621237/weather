import {Sub,_after,_before,add} from './actions'
import {SUB,AFTER,BEFORE,ADD} from './constans'


const initialState = { 
    number: 1,
    history : [],
    errorMsg : '' 
}

 const numberReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        state = {
          ...state,
          history : [...state.history,state.number += action.value],
          number : state.number + action.value
        }
        break;
      case SUB:
        state.number -= action.param
        break;
        case BEFORE :
          state = {
            ...state,
            name : "hello",
          }
          break;
          case AFTER :
            state = {
              ...state,
              name : action.param,
            }
            break;
    }
    return state
  }
  export default numberReducer