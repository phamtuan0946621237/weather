// import {getCurrentWeather,getCurrentWeatherComplete} from './actions'
import { GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_COMPLETE } from './constans'


const initialState = {
  list: undefined
}

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_COMPLETE:
      return {
        ...state,
        list: action.payload
      }
  }
  return state
}
export default currentWeatherReducer