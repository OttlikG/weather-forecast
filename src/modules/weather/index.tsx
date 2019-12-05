import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import {
	fetchCurrentWeather as a_fetchCurrentWeather,
	fetchForecast as a_fetchForecast
} from './action';
import {
	deriveCurrentWeather as s_deriveCurrentWeather,
	deriveForecast as s_deriveForecast,
	DeriveCurrentWeather,
	DeriveForecast
} from './selector'

import SearchBar from '../../component/search-bar/search-bar'
import WeatherCard from '../../component/weather-card/weather-card'

import "./style.css";

declare interface WeatherProps {
	currentWeather: DeriveCurrentWeather,
	forecast: DeriveForecast[],
	fetchCurrentWeather: Function,
	fetchForecast: Function
}

export function Weather(props: WeatherProps) {
	const [city, setCity] = useState('Budapest')

	useEffect(() => {
		props.fetchCurrentWeather(city)
		props.fetchForecast(city)
	}, [city])

	const {
		currentWeather,
		forecast
	} = props

	return (
		<div className="weather-container">
			<SearchBar onSearch={setCity} />
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

function mapStateToProps(state: any) {
	return {
		currentWeather: s_deriveCurrentWeather(state),
		forecast: s_deriveForecast(state)
	}
}

export default connect(mapStateToProps, {
	fetchCurrentWeather: a_fetchCurrentWeather,
	fetchForecast: a_fetchForecast
})(Weather)
