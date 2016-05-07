import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		var content = ""
		if (this.props.entity.url == null){
			content = this.props.entity.name
		}
		else {
			content = <div><a target="_blank" href={'http://'+this.props.entity.url}>{ this.props.entity.name }</a>, {this.props.entity.city}</div>
		}


		return (
			<li>{content}</li>
		)
	}
}

export default ListItem