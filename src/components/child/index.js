import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		content: state.children.list.find(c => c.id === ownProps.id).content
	}
}
@connect(mapStateToProps)
export default class Child extends React.Component {
	render() {
		return <div style={styles.child}>{this.props.content}</div>
	}
}

const styles = {
	child: {
		display: 'inline-block',
		background: 'green',
		border: '1px solid black',
		padding: '3px'
	}
}