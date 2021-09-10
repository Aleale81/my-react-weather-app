/** @format */

import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-7">
					<ul className="info">
						<li className="sky text-capitalize">{props.sky}</li>
						<li className="humidity">
							Humidity: <span>{props.humidity}</span>%
						</li>
						<li className="wind">
							Wind: <span>{props.wind}</span> km/h
						</li>
					</ul>
				</div>
				<div className="col-5">
					<img
						src={props.icon}
						className="icon"
						alt={props.sky}
						width="100px"
					/>
				</div>
			</div>
		</div>
	);
}
