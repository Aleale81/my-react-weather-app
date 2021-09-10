/** @format */

import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<small className="Footer">
			<a
				className="github"
				href="https://github.com/Aleale81/my-weather-forecast"
				target="_blank"
				rel="noreferrer"
			>
				Open-source on GitHub <i className="fab fa-github"></i>
			</a>
			, by Alessandra Scarpellini
		</small>
	);
}
