/** @format */

import React from "react";
import "./Today.css";

export default function Today(props) {
	return (
		<div className="Today">
			<div className="row">
				<span className="date">
					{props.day} {props.date} {props.month}. Last updated: {props.hour}:
					{props.minutes}
				</span>
			</div>
		</div>
	);
}
