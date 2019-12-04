import { createAction } from 'typesafe-actions'
import { Dispatch } from 'redux'
import forecastFixture from './fixtures/forecast'

type AddCurrentWeather = {
	type: 'weather/ADD_CURRENT_WEATHER'
}

type AddForecast = {
	type: 'weather/ADD_FORECAST'
}

export const addCurrentWeather = createAction('weather/ADD_CURRENT_WEATHER', data => data)()

export const fetchCurrentWeather = (city: string) => async (dispatch: Dispatch<AddCurrentWeather>) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0e86816ebe6810ffd2fa9f14a9f4aef2`

	try {
		const response = await fetch(url, {
			headers: {
				'Accept': 'application/json'
			}
		});
		const data = await response.json();

		dispatch(addCurrentWeather(data));
	} catch (error) {
		console.error(error)
	}
}

export const addForecast = createAction('weather/ADD_FORECAST', data => data)()

export const fetchForecast = () => async (dispatch: Dispatch<AddForecast>) => {
	return dispatch(addForecast(forecastFixture))
}