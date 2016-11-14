import { dispatch, store } from '~/store'

export const addChildren = () => {
	var id = 'childId_' + store.getState().children.list.length

	dispatch({
		type: 'ADD_CHILDREN',
		child: {
			id: id,
			content: 'Child with id: ' + id
		}
	})
}


