import { getType } from 'typesafe-actions'
import {
	addCurrentWeather,
	addForecast
} from '../action'
import reducer from '../reducer'


describe('reducer', () => {
	it('should merge the currentWeather to state', () => {
		const nextState = reducer(undefined , { type: getType(addCurrentWeather), payload: { name: 'Budapest' } })

		expect(nextState.currentWeather.name).toBe('Budapest')
	})

	it('should merge forecast response to state', () => {
		const nextState = reducer(undefined, { type: getType(addForecast), payload: { list: [{ dt: 1 }] } })
		expect(nextState.forecast.list[0].dt).toBe(1)
	})
})