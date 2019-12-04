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
import "./style.css";

declare interface WeatherProps {
	currentWeather: DeriveCurrentWeather,
	forecast: DeriveForecast[],
	fetchCurrentWeather: Function,
	fetchForecast: Function
}

function Weather(props: WeatherProps) {
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
			<div className="search-bar-container">
				<div className="search-bar">
					<input
						className="search-bar__input"
						type="text"
						placeholder="Írj be egy települést"
					/>
					<span className="search-bar__icon">
						<i className="fas fa-search"></i>
					</span>
				</div>
			</div>
			<div className="forecast-container">
				<div className="forecast">
					<div className="today">
						<div className="city-wrapper">
							<i className="fas fa-map-marker-alt" />
							<div className="city">{currentWeather.location}</div>
						</div>
						<div className="current-weather">
							<div className="weather-icon">
								<i className="fas fa-sun"></i>
							</div>
							<div className="degree">9°</div>
						</div>
						<div className="weather-details">
							<div className="wind-speed">
								<div className="wind-speed-title">Wind speed</div>
								<div className="wind-speed-value">{currentWeather.windSpeed}</div>
							</div>
							<div className="wind-degree">
								<div className="wind-degree-title">Wind degree</div>
								<div className="wind-degree-value">{currentWeather.windDegree}°</div>
							</div>
						</div>
					</div>
					<div className="forecast-carousel-container">
					 	<div className='forecast-carousel'>
							<div className='carousel-content'>
								<div className='carousel-row'>
									{forecast.slice(0, 15).map((forecastHour) => (
										<div className="forecast-carousel-hour" key={forecastHour.displayHour}>
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
