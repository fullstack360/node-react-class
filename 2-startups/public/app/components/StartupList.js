import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			startups: [
				{name:'Plated', city:'San Francisco', url:'www.plated.com'},
				{name:'YikYak', city:'Atlanta', url:'www.yikyak.com'},
				{name:'Seat Geek', city:'New York', url:'www.seatgeek.com'},
				{name:'Google', city:'Mountain View', url:'www.google.com'}
			]
		}
	}


	render(){
		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} entity={startup} />

		})

		return (
			<ol>
				{ list }
			</ol>
		)
	}
}

export default StartupList