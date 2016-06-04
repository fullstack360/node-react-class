import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class Communities extends Component {

	constructor(props, context){
		super(props, context)
		this.updateNewCommunity = this.updateNewCommunity.bind(this)
		this.addCommunity = this.addCommunity.bind(this)
		this.state = {
			newCommunity: {
				name:'',
				city:'',
				address:'',
				state:''
			}
		}
	}

	componentDidMount(){
		api.handleGet('/api/community', null, function(err, response){
			if (err){
				alert('OOPS! '+err)
				return
			}

			store.dispatch(actions.communitiesReceived(response.results))

		})

	}

	addCommunity(event){
//		console.log('Add Community: '+JSON.stringify(this.state.newCommunity))
		api.handlePost('/api/community', this.state.newCommunity, function(err, response){
			if (err){
				alert('OOPS - '+err)
				return
			}

			console.log('Community CREATED: '+JSON.stringify(response))
			store.dispatch(actions.communityCreated(response.result))
		})

	}

	updateNewCommunity(event){
//		console.log('updateNewCommunity: '+event.target.id+' = '+event.target.value)
		var community = Object.assign({}, this.state.newCommunity)
		community[event.target.id] = event.target.value
		this.setState({
			newCommunity: community
		})
	}

	render(){

		var list = this.props.communities.map(function(community, i){
			return <li key={community.id}><a href={'/community/'+community.slug}>{community.name}, {community.city}</a></li>

		})

		return (
			<div>
				<ol>
					{list}
				</ol>
				<h3>Add Community</h3>
				<input onChange={this.updateNewCommunity} type="text" id="name" name="name" placeholder="Name" /><br />
				<input onChange={this.updateNewCommunity} type="text" id="address" name="address" placeholder="Address" /><br />
				<input onChange={this.updateNewCommunity} type="text" id="city" name="city" placeholder="City" /><br />
				<input onChange={this.updateNewCommunity} type="text" id="state" name="state" placeholder="State" /><br />
				<button onClick={this.addCommunity}>Add</button>
			</div>
		)
	}
}

const stateToProps = function(state){

	console.log('STATE TO PROPS: '+JSON.stringify(state))
	return {
		communities: state.communityReducer.communitiesArray
	}

}

export default connect (stateToProps)(Communities)






