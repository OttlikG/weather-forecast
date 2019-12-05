import { createAction } from 'typesafe-actions'
import { Dispatch } from 'redux'
import forecastFixture from './fixtures/forecast'
import {
	WeatherAction
} from './types'

export const addCurrentWeather = createAction('weather/ADD_CURRENT_WEATHER', data => data)()
export const addSearchNotification = createAction('weather/ADD_SEARCH_NOTIFICATION', data => data)()

export const fetchCurrentWeather = (city: string) => async (dispatch: Dispatch<WeatherAction>) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0e86816ebe6810ffd2fa9f14a9f4aef2`

	try {
		const response = await fetch(url, {
			headers: {
				'Accept': 'application/json'
			}
		});

		if (response.status === 404) {
			dispatch(addSearchNotification('Nincs talalat'))
			return
		}

		const data = await response.json();

		dispatch(addCurrentWeather(data));
	} catch (error) {
		console.error(error)
	}
}

export const addForecast = createAction('weather/ADD_FORECAST', data => data)()

export const fetchForecast = () => async (dispatch: Dispatch<WeatherAction>) => {
	return dispatch(addForecast(forecastFixture))
}

export const clearNotification = createAction('weather/CLEAR_NOTIFICATION', (data) => data)();
