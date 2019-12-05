import React from "react";

export default function SearchBar({onSearch}) {
	return (
		<div className="search-bar-container" data-testid='search-bar'>
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
	);
}
