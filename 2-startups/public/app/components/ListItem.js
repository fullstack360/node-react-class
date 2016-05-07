import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		var content = ""
		if (this.props.entity.url == null){
			// TERNARY:
			var color = (this.props.entity.party == 'd') ? 'blue' : 'red'

			content = <span style={{color:color}}>{this.props.entity.firstName+' '+this.props.entity.lastName}</span>
		}
		else {
			content = <div><a style={{textDecoration:'none', marginRight:36}} target="_blank" href={'http://'+this.props.entity.url}>{ this.props.entity.name }</a>, {this.props.entity.city}</div>
		}


		return (
			<li>{content}</li>
		)
	}
}

export default ListItem