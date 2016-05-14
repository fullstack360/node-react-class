import React, { Component } from 'react'

class ListItem extends Component {
	constructor(props, context){
		super(props, context)
		this.handleClick = this.handleClick.bind(this)

	}

	handleClick(event){
		console.log('handleClick: '+this.props.text.name)
		this.props.click(this.props.text.id)
	}


	render(){
		var location = this.props.text.location.toLowerCase()
		var textColor = (location == 'california') ? 'red' : '#000'


		return (
			<li>
				<span onClick={this.handleClick} style={{color:textColor}}>{this.props.text.name}, {location}</span>
			</li>
		)
	}

}

export default ListItem