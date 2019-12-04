import { getType, createReducer } from 'typesafe-actions'
import { WeatherState, CurrentWeatherAction, ForecastAction, CurrentWeatherResponse, ForecastResponse } from './types'

import {
	addCurrentWeather,
	addForecast
} from './action'

const initialState = {
	currentWeather: {} as CurrentWeatherResponse,
	forecast: {} as ForecastResponse
}

export default createReducer(initialState, {
	[getType(addCurrentWeather)]: (state: WeatherState, action: CurrentWeatherAction) => {
		return {
			...state,
			currentWeather: action.payload
		}
	},
	[getType(addForecast)]: ( state: WeatherState, action: ForecastAction) => {
		return {
			...state,
			forecast: action.payload
		}
	}
})
