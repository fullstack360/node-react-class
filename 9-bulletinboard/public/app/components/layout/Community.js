import React, { Component } from 'react'
import api from '../../utils/api'
import Nav from '../../components/Nav'


class Community extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			community:{
				name: ''
			}

		}
	}

	componentDidMount(){
//		console.log('SLUG == '+this.props.slug)

		var _this = this
		var endpoint = '/api/community?slug='+this.props.slug
		api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			var results = response.results
			var community = results[0]
			_this.setState({
				community: community
			})
		})
	}


	render(){
		return (
			<div>
				<Nav />
				<h2>{this.state.community.name}</h2>
				<ol>
					<li>Post</li>
					<li>Post</li>
					<li>Post</li>
					<li>Post</li>
				</ol>

			</div>
		)
	}
}

export default Community