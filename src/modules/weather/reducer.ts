import { getType, createReducer, action } from 'typesafe-actions'
import {
	WeatherState,
	CurrentWeatherAction,
	ForecastAction,
	SearchNotificationAction,
	CurrentWeatherResponse,
	ForecastResponse
} from './types'

import {
	addCurrentWeather,
	addForecast,
	addSearchNotification,
	clearNotification
} from './action'

const initialState = {
	currentWeather: {} as CurrentWeatherResponse,
	forecast: {} as ForecastResponse,
	searchNotification: ''
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
	},
	[getType(addSearchNotification)]: (state: WeatherState, action: SearchNotificationAction) => {
		return {
			...state,
			searchNotification: action.payload
		}
	},
	[getType(clearNotification)]: (state: WeatherState) => {
		return {
			...state,
			searchNotification: ''
		}
	}
})
