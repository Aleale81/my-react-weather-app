/** @format */

import React from "react";
import "./City.css";

export default function City(props) {
	return (
		<div className="City">
			<div className="row">
				<div className="col-7">
					<h1 className="city text-capitalize">
						{props.name}, {props.country}
					</h1>
				</div>
				<div className="col-5">
					<h1 className="temp">{props.temperature}</h1>
					<span className="units">
						{" "}
						<a href=" ">°C</a> | <a href=" ">°F</a>{" "}
					</span>
				</div>
			</div>
		</div>
	);
}
