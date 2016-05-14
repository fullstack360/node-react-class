import React, { Component } from 'react'

class Featured extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){
		return (
			<div>
				<h2>Featured</h2>
				{this.props.entity.name}
				<p>{this.props.entity.description}</p>
			</div>
		)
	}

}

export default Featured
