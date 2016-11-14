import React 		from 'react'
import { render } 	from 'react-dom'
import { Provider }	from 'react-redux'

import { store, history } from '~/store'

import Parent from '~/components/parent'

import '~/index.html'

render(
	<Provider store={store}>
		<Parent />
	</Provider>,
	document.getElementById('mount')
)


