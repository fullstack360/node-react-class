import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class ProfileList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			profiles: [
				{firstName:'Donald', lastName:'Trump', party:'r'},
				{firstName:'Hillary', lastName:'Clinton', party:'d'},
				{firstName:'Bernie', lastName:'Sanders', party:'d'},
				{firstName:'Barack', lastName:'Obama', party:'d'}
			]
		}
	}


	render(){
		var list = this.state.profiles.map(function(profile, i){
			return <ListItem key={i} entity={profile} />

		})

		return (
			<div className="list-box">
				<ol>
					{ list }
				</ol>
			</div>
		)
	}
}

export default ProfileList