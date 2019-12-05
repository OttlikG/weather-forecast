import React from 'react'
import { shallow } from 'enzyme'
import { Weather } from '../index'

describe('weather', () => {
	let props

	beforeEach(() => {
		props = {
			currentWeather: {
				location: 'Budapest',
				celsius: 20,
				windDegree: 20,
				windSpeed: 30
			},
			forecast: [
				{ id: 1233, displayHour: '11:00', weather: 'Cloud', temperature: 9, windDegree: 15 }
			],
			fetchCurrentWeather: jest.fn(),
			fetchForecast: jest.fn()
		}
	})

	it('should display WeatherCard', () => {
		const component = shallow(<Weather {...props} />)
		const weatherCard = component.find('WeatherCard')
		expect(weatherCard.exists()).toBe(true)
	})

	it('should display one forecast-carousel-hour', () => {
		const component = shallow(<Weather {...props} />)
		const forecastCarouselHour = component.find('.forecast-carousel-hour')
		expect(forecastCarouselHour.length).toBe(1)
	})

	it('should display important information on forecast-carousel-hour', () => {
		const component = shallow(<Weather {...props} />)
		const forecastHour = component.find('.forecast-hour').text()
		const forecastBarDegree = component.find('.forecast-bar-degree').text()
		const rainPercent = component.find('.rain-percent').text()

		expect(forecastHour).toBe('11:00')
		expect(forecastBarDegree).toBe('9°')
		expect(rainPercent).toBe('15%')
	})
})