import { combineReducers, compose, createStore } 	from 'redux'

import * as reducers from './reducers'

var r = combineReducers({
	...reducers
})

var c = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = createStore(r, {}, c)

export const dispatch = store.dispatch