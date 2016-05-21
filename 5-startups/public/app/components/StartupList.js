import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import api from '../utils/api'
import actions from '../actions/actions'
import store from '../stores/store'


class StartupList extends Component {

	constructor(props, context){
		super(props, context)
		this.updateStartup = this.updateStartup.bind(this)
		this.createStartup = this.createStartup.bind(this)
		this.state = {
			startup: {
				name:'',
				founder:'',
				url:''
			}
		}
	}

	updateStartup(event){
//		console.log('updateStartup: '+event.target.id+' = '+event.target.value)
		var copy = Object.assign({}, this.state.startup)
		copy[event.target.id] = event.target.value // GOOD!
		this.setState({
			startup: copy
		})

		// this.state[event.target.id] = event.target.value // BAD!
	}

	createStartup(){
		var _this = this
		api.handlePost('/api/startup', this.state.startup, function(err, response){
			if (err){
				alert(err.message)
				return
			}

//			console.log('STARTUP CREATED: '+JSON.stringify(response))
			store.dispatch(actions.startupCreated(response.result))
		})
	}


	componentDidMount(){
		console.log('Component Did Mount')
		api.handleGet('/api/startup', {}, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			store.dispatch(actions.startupsReceived(response.results))

		})
	}


	render(){
		console.log('RENDER: '+JSON.stringify(this.props.startups))
		var list = this.props.startups.map(function(startup, i){
			return (
				<li key={i}>{startup.name}</li>
			)
		})

		return (
			<div className="list-box">
				<ol>
					{list}
				</ol>

				<h2>Add Startup</h2>
				<input value={this.state.startup.name} onChange={this.updateStartup} type="text" id="name" placeholder="Name" /><br />
				<input value={this.state.startup.founder} onChange={this.updateStartup} type="text" id="founder" placeholder="Founder" /><br />
				<input value={this.state.startup.url} onChange={this.updateStartup} type="text" id="url" placeholder="URL" /><br />
				<button onClick={this.createStartup}>Add</button>
			</div>
		)
	}

}

const stateToProps = function(state){
	console.log('STATE TO PROPS: '+JSON.stringify(state))
	return {
		startups: state.startupReducer.startupsArray
	}

}

export default connect(stateToProps)(StartupList)












