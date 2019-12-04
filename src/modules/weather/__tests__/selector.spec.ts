import {
	deriveCurrentWeather,
	deriveForecast
} from '../selector'

describe('weather selector', () => {
	let data

	beforeAll(() => {
		data = {
			weather: {
				currentWeather: {
					name: 'Budapest',
					main: {
						temp: 278
					},
					wind: {
						speed: 100,
						deg: 43
					}
				},
				forecast: {
					list: [
						{
							dt: 1557309600,
							main: {
								temp: 278.76,
							},
							weather: [{ main: 10 }],
							wind: {
								deg: 70
							}
						}
					]
				}
			}
		}
	})

	describe('deriveCurrentWeather', () => {
		it('should transform the response to view data', () => {
			const result = deriveCurrentWeather(data)

			expect(result).toEqual({
				location: 'Budapest',
				celsius: 4.85,
				windSpeed: 100,
				windDegree: 43
			})
		})
	})

	describe('deriveForecast', () => {
		it('should transform the forecast response to view data', () => {
			const result = deriveForecast(data)

			expect(result).toEqual(expect.arrayContaining([{
				displayHour: '11:00',
				weather: 10,
				temperature: 6,
				windDegree: 70
			}]))
		})
	})
})

