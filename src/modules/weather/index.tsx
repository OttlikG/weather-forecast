import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import {
	fetchCurrentWeather as a_fetchCurrentWeather,
	fetchForecast as a_fetchForecast,
	clearNotification as a_clearNotification
} from './action';
import {
	deriveCurrentWeather as s_deriveCurrentWeather,
	deriveForecast as s_deriveForecast,
	getSearchNotification as s_getSearchNotification,
	DeriveCurrentWeather,
	DeriveForecast
} from './selector'
import { WeatherState } from './types'

import SearchBar from '../../component/search-bar/search-bar'
import WeatherCard from '../../component/weather-card/weather-card'

import "./style.css";

declare interface WeatherProps {
	currentWeather: DeriveCurrentWeather,
	forecast: DeriveForecast[],
	searchNotification: string,
	fetchCurrentWeather: Function,
	fetchForecast: Function,
	clearNotification: Function
}

export function Weather(props: WeatherProps) {
	const {
		fetchCurrentWeather,
		fetchForecast,
		searchNotification,
		clearNotification
	} = props

	const [city, setCity] = useState('Budapest')

	useEffect(() => {
		fetchCurrentWeather(city)
		fetchForecast(city)
	}, [city, fetchCurrentWeather, fetchForecast])

	const {
		currentWeather,
		forecast
	} = props

	return (
		<div className="weather-container">
			<SearchBar onSearch={setCity} searchNotification={searchNotification} clearNotification={clearNotification} />
			<div className="forecast-container">
				<div className="forecast">
					<WeatherCard
						location={currentWeather.location}
						celsius={currentWeather.celsius}
						windSpeed={currentWeather.windSpeed}
						windDegree={currentWeather.windDegree}
					/>
					<div className="forecast-carousel-container" data-testid='forecast-carousel'>
					 	<div className='forecast-carousel'>
							<div className='carousel-content'>
								<div className='carousel-row'>
									{forecast.map((forecastHour) => (
										<div className="forecast-carousel-hour" key={forecastHour.id}>
											<div className="forecast-hour">{forecastHour.displayHour}</div>
											<div className="forecast-icon">
												<i className="fas fa-sun" />
											</div>
											<div className="forecast-bar">
												<div className="forecast-bar-degree">
													{forecastHour.temperature}°
												</div>
											</div>
											<div className="rain-container">
												<div className="rain">
													<i className="fas fa-cloud-rain" />
													<span className="rain-percent">{forecastHour.windDegree}%</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state: { weather: WeatherState }) {
	return {
		currentWeather: s_deriveCurrentWeather(state),
		forecast: s_deriveForecast(state),
		searchNotification: s_getSearchNotification(state)
	}
}

export default connect(mapStateToProps, {
	fetchCurrentWeather: a_fetchCurrentWeather,
	fetchForecast: a_fetchForecast,
	clearNotification: a_clearNotification
})(Weather)
