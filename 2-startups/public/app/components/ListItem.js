import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		return (
			<li>{ this.props.startup }</li>
		)
	}
}

export default ListItem