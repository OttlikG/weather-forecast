import configureStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import { fetchCurrentWeather } from '../action';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('weather action', () => {
	describe('fetchCurrentWeather', () => {
		it('should call samples current weather API', async () => {
			const city = 'Budapest'

			fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0e86816ebe6810ffd2fa9f14a9f4aef2`, {
				name: 'Budapest',
				main: {
					temp: 200
				},
				wind: {
					speed: 1,
					deg: 1
				}
			})

			const store = mockStore({})

			await store.dispatch(fetchCurrentWeather('Budapest'))
			const action = store.getActions()

			expect(action[0]).toEqual({
				type: 'weather/ADD_CURRENT_WEATHER',
				payload: {
					name: 'Budapest',
					main: {
						temp: 200
					},
					wind: {
						speed: 1,
						deg: 1
					}
				}
			})
		})
	})
})