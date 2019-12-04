export type CurrentWeatherResponse = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	base: string;
	main: {
		temp: number;
		pressure: number;
		humidity: number;
		temp_min: number;
		temp_max: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	cloud: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
};

export type ForecastHour = {
	dt: number;
	main: {
		temp: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		see_level: number;
		grnd_level: number;
		humidity: number;
		temp_kf: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	clouds: {
		all: number;
	};
	wind: {
		speed: number;
		deg: number;
	};
	sys: {
		pod: string;
	};
	dt_text: string;
};

export type ForecastResponse = {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastHour[];
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			long: number;
		};
		country: string;
		population: number;
	};
};
