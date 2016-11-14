import { clone } from '~/utils'

const initialChildren = {
	activeChild: null,
	list: []
}
export const children = (state = initialChildren, action) => {
	switch (action.type) {
		case 'ADD_CHILDREN':
			var state = clone(state)
			state.list.push(action.child)
			return state
		default:
			return state
	}
}


