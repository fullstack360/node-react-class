import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	constructor(props, context){
		super(props, context)
		this.addStartup = this.addStartup.bind(this)
		this.updateStartup = this.updateStartup.bind(this)
		this.state = {
			startup: {
				name:'',
				location:'',
				description:''
			},
			startups:[
				{name: 'Microsoft', location:'Washington'},
				{name: 'Google', location:'California'},
				{name: 'Amazon', location:'Washington'},
				{name: 'Apple', location:'California'}
			]
		}
	}

	addStartup(event){
		event.preventDefault()
		console.log('addStartup: '+JSON.stringify(this.state.startup))

		var updatedStartups = Object.assign([], this.state.startups)
		updatedStartups.push(this.state.startup)

		this.setState({
			startups: updatedStartups
		})
	}

	updateStartup(event){
		console.log('updateStartup: '+event.target.id+' == '+event.target.value)
		// this.startup[event.target.id] = event.target.value // NO!

		var updatedStartup = Object.assign({}, this.state.startup)
		updatedStartup[event.target.id] = event.target.value // YES!

		this.setState({
			startup: updatedStartup
		})

	}

	render(){
		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} text={startup} />
		})


		return (
			<div className="list-box">
				<ol>
					{list}
				</ol>

				<h2>Add Startup</h2>
				<input id="name" onChange={this.updateStartup} type="text" placeholder="Name" /><br />
				<input id="location" onChange={this.updateStartup} type="text" placeholder="Location" /><br />
				<a onClick={this.addStartup} href="#">Add</a>
			</div>
		)
	}

}

export default StartupList