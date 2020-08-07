import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_WEATHER } from './CurrentWeather/constans';
import {GET_FOUR_DAY_WEATHER} from './FourDayWeather/constans'
import * as Connection from '../connection'
import { getCurrentWeatherComplete } from './CurrentWeather/actions';
import {getFourDayWeatherComplete} from './FourDayWeather/actions'
export function* sagaGetCurrentWeather(action) {
    // console.log('action', action)
    const {
        appId,
        idCity
    } = action.payload

    let response = yield Connection.GET_CURRENT_WEATHER("https://api.openweathermap.org/data/2.5/weather", { id: idCity, appid: appId })
    yield put(getCurrentWeatherComplete(response))

}
export function* sagaGetFourDayWeather(action) {
    // console.log('action', action)
    const {
        appId,
        idCity
    } = action.payload

    let response = yield Connection.GET_CURRENT_WEATHER("https://api.openweathermap.org/data/2.5/forecast", { id: idCity, appid: appId })
    // console.log("response : getFourDayWeatherComplete" ,response)
    yield put(getFourDayWeatherComplete(response))
}

export function* rootSaga() {
    yield takeLatest(GET_CURRENT_WEATHER, sagaGetCurrentWeather);
    yield takeLatest(GET_FOUR_DAY_WEATHER, sagaGetFourDayWeather);
}