import React from 'react'
import { connect } from 'react-redux'

import { addChildren } from '~/actions'

import Child from '~/components/child'

const mapStateToProps = (state, ownProps) => {
	return {
		children: state.children
	}
}
@connect(mapStateToProps)
export default class Parent extends React.Component {
	addClicked = () => {
		addChildren()
	}

	render() {


		var childNodes = this.props.children.list.map(c => {
			return <Child id={c.id} key={c.id}></Child>
		})

		return (
			<div>
				<button onClick={this.addClicked}>Add</button>
				<div style={styles.parent}>
					{childNodes}
				</div>
				<div>
					{JSON.stringify(this.props.children)}
				</div>
			</div>
		)
	}
}

const styles = {
	parent: {
		width: '800px',
		height: '200px',
		background: 'blue'
	}
}

