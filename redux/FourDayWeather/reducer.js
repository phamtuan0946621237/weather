// import {getCurrentWeather,getCurrentWeatherComplete} from './actions'
import {GET_FOUR_DAY_WEATHER, GET_FOUR_DAY_WEATHER_COMPLETE} from './constans'


const initialState = { 
  dataFourDayWeather : undefined
}

 const fourDayWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FOUR_DAY_WEATHER_COMPLETE:
          return {
            ...state,
            dataFourDayWeather : action.payload
          }
            }
    return state
  }
  export default fourDayWeatherReducer