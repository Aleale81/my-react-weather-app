/** @format */

import React from "react";
import "./Search.css";

export default function Search(props) {
	return (
		<div className="Search">
			<form className="form">
				<div className="row">
					<div className="col-8">
						<input
							type="search"
							className="form-control text-capitalize"
							placeholder="Enter City 🌍"
							autoComplete="off"
						/>
					</div>
					<div className="col-4">
						<input className="btn" type="submit" value="Search" />
					</div>
				</div>
			</form>
		</div>
	);
}
