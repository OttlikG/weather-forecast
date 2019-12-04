import {
	ForecastResponse,
	CurrentWeatherResponse
} from './response-type'

export type WeatherState = {
	currentWeather: CurrentWeatherResponse
	forecast: ForecastResponse
}