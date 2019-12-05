import { ActionType } from 'typesafe-actions'
import {
	addCurrentWeather,
	addForecast,
	addSearchNotification,
	clearNotification
} from '../action'

export type CurrentWeatherAction = ActionType<typeof addCurrentWeather>

export type ForecastAction = ActionType<typeof addForecast>

export type SearchNotificationAction = ActionType<typeof addSearchNotification>

export type ClearNotificationAction = ActionType<typeof clearNotification>

export type WeatherAction =
	CurrentWeatherAction |
	ForecastAction |
	SearchNotificationAction |
	ClearNotificationAction

