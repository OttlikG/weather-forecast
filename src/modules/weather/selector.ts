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
		celsius: convertToCelsius(currentWeather.main.temp),
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
	return (forecast.list || []).map(hourForecast => {
		return {
			displayHour: format(convertUnixToTimestamp(hourForecast.dt), 'hh:mm'),
			weather: hourForecast.weather[0].main,
			temperature: Math.round(convertToCelsius(hourForecast.main.temp)),
			windDegree: Math.round(hourForecast.wind.deg)
		}
	})
})

export declare interface DeriveForecast {
	displayHour: string,
	weather: string,
	temperature: number,
	windDegree: number
}