import { ActionType } from 'typesafe-actions'
import { addCurrentWeather, addForecast } from '../action'

export type CurrentWeatherAction = ActionType<typeof addCurrentWeather>

export type ForecastAction = ActionType<typeof addForecast>