import React, { useState } from "react";

interface SearchBar {
	onSearch: Function
}

export default function SearchBar({ onSearch }: SearchBar) {
	const [inputValue, setInputValue] = useState('')

	function handleSearchOnClick() {
		onSearch(inputValue)
	}

	function handleSearchOnEnter(event: any) {
		if (event.charCode === 13) {
			onSearch(inputValue)
		}
	}

	function handleOnInputChange(event: any) {
		setInputValue(event.target.value)
	}

	return (
		<div className="search-bar-container" data-testid='search-bar'>
			<div className="search-bar" onKeyPress={handleSearchOnEnter}>
				<input
					value={inputValue}
					onChange={handleOnInputChange}
					className="search-bar__input"
					type="text"
					placeholder="Írj be egy települést"
				/>
				<span className="search-bar__icon" onClick={handleSearchOnClick}>
					<i className="fas fa-search"></i>
				</span>
			</div>
		</div>
	);
}
