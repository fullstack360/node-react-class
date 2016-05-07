import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class ProfileList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			profiles: [
				{firstName:'Donald', lastName:'Trump'},
				{firstName:'Hillary', lastName:'Clinton'},
				{firstName:'Bernie', lastName:'Sanders'},
				{firstName:'Barack', lastName:'Obama'}
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