import {GET_FOUR_DAY_WEATHER,GET_FOUR_DAY_WEATHER_COMPLETE} from './constans'

export function getFourDayWeather(payload) {
    return {
        type: GET_FOUR_DAY_WEATHER,
        payload
    }
}
export function getFourDayWeatherComplete(payload) {
    return {
        type: GET_FOUR_DAY_WEATHER_COMPLETE,
        payload
    }
}