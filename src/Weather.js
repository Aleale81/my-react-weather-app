/** @format */

import React, { useState } from "react";
import Search from "./Search";
import City from "./City";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import Timestamp from "react-timestamp";
import "./Weather.css";

export default function Weather() {
	const [city, setCity] = useState("Amsterdam");
	const [weather, setWeather] = useState({});
	const [date, setDate] = useState(null);

	function showWeather(response) {
		setCity({
			name: response.data.name,
			country: response.data.sys.country,
			temp: Math.round(response.data.main.temp),
		});
		setWeather({
			sky: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed * 3.6),
			icon: response.data.weather[0].icon,
		});
		setDate(currentDate);
	}
	let currentDate = new Date();
	let apiKey = `a1bed3af7d71b323ab4af9036fcd943d`;
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(showWeather);
	return (
		<div className="Weather afternoon">
			<div className="Today">
				<Timestamp date={date} />
			</div>
			<Search />
			<City name={city.name} country={city.country} temperature={city.temp} />
			<WeatherInfo
				sky={weather.sky}
				humidity={weather.humidity}
				wind={weather.wind}
				icon={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
			/>
			<Forecast />
		</div>
	);
}
