import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import CommunityPreview from '../components/CommunityPreview'
import Nav from '../components/Nav'


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
			return <CommunityPreview key={community.id} community={community} />

		})

		return (
			<div>
				<Nav transparent="yes" />
		        <section id="slider" style={{background: 'url("/images/nyc.jpg") center', overflow:'visible'}} data-height-lg="450" data-height-md="450" data-height-sm="600" data-height-xs="600" data-height-xxs="600">
		            <br />
		        </section>

		        <section id="content">
		            <div className="content-wrap">
						<div className="container clearfix">

							<div className="col_three_fifth bothsidebar nobottommargin">
			                    <div className="fancy-title title-border">
			                        <h3>Communities</h3>
			                    </div>

			                    <div id="posts" className="events small-thumbs">
									{list}
			                    </div>
			                </div>

							<h3>Sign Up</h3>

		                    <div className="col_one_third nobottommargin">

								<div className="well well-lg nobottommargin">
		                            <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
		                                <h3>Free to Join</h3>
		                                <div className="col_full">
		                                    <label for="login-form-username">Username:</label>
		                                    <input type="text" id="login-form-username" name="login-form-username" value="" className="required form-control input-block-level" />
		                                </div>

		                                <div className="col_full">
		                                    <label for="login-form-password">Password:</label>
		                                    <input type="password" id="login-form-password" name="login-form-password" value="" className="required form-control input-block-level" />
		                                </div>

		                                <div className="col_full nobottommargin">
		                                    <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
		                                    <a href="#" className="fright">Forgot Password?</a>
		                                </div>
		                            </form>
		                        </div>
		                    </div>

						</div>
		            </div>
		        </section>

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






