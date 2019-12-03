import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Router from './router'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const store = createStore(
	combineReducers({
		routing: routerReducer,
	}),
	composeWithDevTools(applyMiddleware(...middleware))
)

export default function StoreWrapper() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}
