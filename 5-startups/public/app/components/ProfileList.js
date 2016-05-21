import React, { Component } from 'react'
import ListItem from '../components/ListItem'
import Featured from '../components/Featured'


class ProfileList extends Component {

	constructor(props, context){
		super(props, context)
		this.updateProfile = this.updateProfile.bind(this)
		this.addProfile = this.addProfile.bind(this)
		this.selectProfile = this.selectProfile.bind(this)
		this.state = {
			selected: null,
			profile: {
				name:'',
				location:'',
				description:''
			},
			selectedProfile: {
				name:'',
				location:'',
				description:''
			},
			profiles:[
				{id:0, name:'travis kalanick', location:'california', description:'founder of Uber'},
				{id:1, name:'steve jobs', location:'california', description:'founder of apple'},
				{id:2, name:'dennis crowley', location:'new york', description:'founder of foursquare'}
			]
		}
	}

	updateProfile(event){
		var updatedProfile = Object.assign({}, this.state.profile)
		updatedProfile[event.target.id] = event.target.value // YES!

		this.setState({
			profile: updatedProfile
		})
	}

	addProfile(event){
		event.preventDefault()
		console.log('ADD PROFILE: '+JSON.stringify(this.state.profile))
		var updatedProfile = Object.assign({}, this.state.profile)
		updatedProfile['id'] = this.state.profiles.length

		var updatedProfiles = Object.assign([], this.state.profiles)
		updatedProfiles.push(updatedProfile)

		this.setState({
			profiles: updatedProfiles
		})
	}

	selectProfile(profileId){
		var profile = this.state.profiles[profileId]
		console.log('selectProfile: '+JSON.stringify(profile))

		this.setState({
			selectedProfile: profile
		})

	}


	render(){
		var _this = this
		var list = this.state.profiles.map(function(profile, i){
			return <ListItem key={i} text={profile} click={_this.selectProfile} />

		})

		return (
			<div className="list-box">
				Profile List
				<ol>
					{list}
				</ol>

				<h2>Add Profile</h2>
				<input id="name" onChange={this.updateProfile} type="text" placeholder="Name" /><br />
				<input id="location" onChange={this.updateProfile} type="text" placeholder="Location" /><br />
				<a onClick={this.addProfile} href="#">Add</a>

				<hr />

				<Featured entity={this.state.selectedProfile} />
			</div>
		)
	}
}

export default ProfileList
