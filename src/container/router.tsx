import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Weather from '../modules/weather'

export default function RouterWrapper() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Weather} />
			</Switch>
		</Router>
	)
}