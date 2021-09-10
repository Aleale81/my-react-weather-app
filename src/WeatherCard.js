/** @format */

import React from "react";
import Today from "./Today";
import Search from "./Search";
import City from "./City";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./WeatherCard.css";

export default function WeatherCard() {
	return (
		<div className="WeatherCard afternoon">
			<Today day="Saturday" date={14} month="August" hour={15} minutes={47} />
			<Search />
			<City name="amsterdam" country="NL" temperature="24" />
			<WeatherInfo
				sky="few clouds"
				humidity={64}
				wind={10}
				icon="http://openweathermap.org/img/wn/02d@2x.png"
			/>
			<Forecast />
		</div>
	);
}
