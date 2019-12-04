import React from "react";
import "./style.css";

function Weather() {
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
							<div className="city">Budapest</div>
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
								<div className="wind-speed-value">10</div>
							</div>
							<div className="wind-degree">
								<div className="wind-degree-title">Wind degree</div>
								<div className="wind-degree-value">30°</div>
							</div>
						</div>
					</div>
					<div className="forecast-carousel-container">
					 	<div className='forecast-carousel'>
							<div className='carousel-content'>
								<div className='carousel-row'>
									{Array(15).fill(1).map((_, index) => (
										<div className="forecast-carousel-hour" key={index}>
											<div className="forecast-hour">11:00</div>
											<div className="forecast-icon">
												<i className="fas fa-sun" />
											</div>
											<div className="forecast-bar">
												<div className="forecast-bar-degree">
													20°
												</div>
											</div>
											<div className="rain-container">
												<div className="rain">
													<i className="fas fa-cloud-rain" />
													<span className="rain-percent">43%</span>
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

export default Weather
