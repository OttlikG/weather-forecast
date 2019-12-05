import { createSelector } from 'reselect'
import { format } from 'date-fns'
import {
	convertUnixToTimestamp,
	convertToCelsius
} from '../../utils/utils'
import {
	WeatherState,
	CurrentWeatherResponse,
	ForecastResponse
} from './types'

const selectCurrentWeather = (state: { weather: WeatherState }): CurrentWeatherResponse => state.weather.currentWeather;
export const deriveCurrentWeather = createSelector(selectCurrentWeather, currentWeather => {
	if (Object.keys(currentWeather).length === 0) return {}
	return {
		location: currentWeather.name,
		celsius: Math.round(convertToCelsius(currentWeather.main.temp)),
		windSpeed: currentWeather.wind.speed,
		windDegree: currentWeather.wind.deg
	}
})

export declare interface DeriveCurrentWeather {
	location?: string,
	celsius?: number,
	windSpeed?: number,
	windDegree?: number
}

const selectForecast = (state: { weather: WeatherState }): ForecastResponse => state.weather.forecast
export const deriveForecast = createSelector(selectForecast, (forecast) => {
	return (forecast.list || []).slice(0, 15).map(hourForecast => {
		return {
			id: hourForecast.dt,
			displayHour: format(convertUnixToTimestamp(hourForecast.dt), 'hh:mm'),
			weather: hourForecast.weather[0].main,
			temperature: Math.round(convertToCelsius(hourForecast.main.temp)),
			windDegree: Math.round(hourForecast.wind.deg)
		}
	})
})

export declare interface DeriveForecast {
	id: number,
	displayHour: string,
	weather: string,
	temperature: number,
	windDegree: number
}