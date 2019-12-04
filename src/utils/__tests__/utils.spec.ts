import {
	convertUnixToTimestamp,
	convertToCelsius
} from '../utils'

describe('utils', () => {
	describe('convertUnixToTimestamp', () => {
		it('should convert the unix timestamp to a date', () => {
			const date = convertUnixToTimestamp(1553709600);
			const formattedDate = 'Wed Mar 27 2019 18:00:00 GMT+0000 (Greenwich Mean Time)'
			expect(date.toString()).toBe(formattedDate)
		})
	})

	describe('convertToCelsius', () => {
		it('should convert kelvin to celsius', () => {
			const temp = 278.76
			const convertedDegree = convertToCelsius(temp)
			expect(convertedDegree).toBe(5.61)
		})
	})
})