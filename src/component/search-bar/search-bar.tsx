import React, { useState, useEffect, useRef } from "react";

interface SearchBar {
	onSearch: Function,
	searchNotification: string,
	clearNotification: Function
}

export default function SearchBar({ onSearch, searchNotification, clearNotification }: SearchBar) {
	const [inputValue, setInputValue] = useState('')
	const dropdown = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutsideOfDropdown(e: any) {
			if (dropdown.current && dropdown.current.contains(e.target)) {
				return
			}

			if (searchNotification) {
				clearNotification()
			}
		}

		document.addEventListener('click', handleClickOutsideOfDropdown)

		return () => {
			document.removeEventListener('click', handleClickOutsideOfDropdown)
		}
	}, [searchNotification])

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
					<i className="fas fa-search" />
				</span>
				{ searchNotification && (
					<div className='search-dropdown' ref={dropdown}>
						<div className='dropdown-content'>
							{ searchNotification }
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
