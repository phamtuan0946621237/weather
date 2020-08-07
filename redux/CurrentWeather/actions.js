import {GET_CURRENT_WEATHER,GET_CURRENT_WEATHER_COMPLETE} from './constans'

export function getCurrentWeather(payload) {
    return {
        type: GET_CURRENT_WEATHER,
        payload
    }
}
export function getCurrentWeatherComplete(payload) {
    return {
        type: GET_CURRENT_WEATHER_COMPLETE,
        payload
    }
}