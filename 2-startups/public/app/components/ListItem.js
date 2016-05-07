import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		return (
			<li>
				<a target="_blank" href={'http://'+this.props.startup.url}>{ this.props.startup.name }</a>, {this.props.startup.city}
			</li>
		)
	}
}

export default ListItem