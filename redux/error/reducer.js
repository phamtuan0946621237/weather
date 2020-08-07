import {_less} from './actions'
import {LESS_THAN_ZERO} from './constans'


const initialState = { 
  number: 1,
  history : [],
  errorMsg : '' 
}
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LESS_THAN_ZERO:
      // state.number += action.value
      state = {
        ...state,
        errorMsg : 'quay lai di ban oi'
      }
      break;
    // case "SUB":
    //   state.number -= action.param
    //   break;
    //   case "BEFORE" :
    //     state = {
    //       ...state,
    //       name : "hello",
    //     }
    //     break;
    //     case "AFTER" :
    //       state = {
    //         ...state,
    //         name : action.param,
    //       }
    //       break;
  }
  return state
}
  export default errorReducer