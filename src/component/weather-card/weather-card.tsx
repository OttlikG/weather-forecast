import React from 'react'

interface WeatherCardProps {
	location?: string,
	celsius?: number,
	windSpeed?: number,
	windDegree?: number
}

export default function WeatherCard({
	location,
	celsius,
	windSpeed,
	windDegree
}: WeatherCardProps) {
	return (
		<div className='weather-card today' data-testid='weather-card'>
			<div className='city-wrapper'>
				<i className='fas fa-map-marker-alt' />
				<div className='city'>{location}</div>
			</div>
			<div className='current-weather'>
				<div className='weather-icon'>
					<i className='fas fa-sun' />
				</div>
				<div className='degree'>{celsius}°</div>
			</div>
			<div className='weather-details'>
				<div className='wind-speed'>
					<div className='wind-speed-title'>Wind speed</div>
					<div className='wind-speed-value'>{windSpeed}</div>
				</div>
				<div className='wind-degree'>
					<div className='wind-degree-title'>Wind degree</div>
					<div className='wind-degree-value'>{windDegree}</div>
				</div>
			</div>
		</div>
	)
}