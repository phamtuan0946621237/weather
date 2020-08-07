// import numberReducer from './status/reducer' 
// import errorReducer from './error/reducer' 
import currentWeatherReducer from './CurrentWeather/reducer' 
import fourDayWeatherReducer from './FourDayWeather/reducer' 
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    currentWeather : currentWeatherReducer,
    fourDayWeather : fourDayWeatherReducer
})

export default rootReducers;