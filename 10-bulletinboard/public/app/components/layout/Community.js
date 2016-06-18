import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../utils/api'
import Nav from '../../components/Nav'
import actions from '../../actions/actions' 
import store from '../../stores/store' 

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
		var _this = this
		var endpoint = '/api/community?slug='+this.props.slug
		api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			var results = response.results
			store.dispatch(actions.communitiesReceived(results))


//			var community = results[0]
			// _this.setState({
			// 	community: community
			// })

		})
	}


	render(){
		return (
			<div>
				<Nav transparent="no" />

		        <section id="content">
		            <div className="content-wrap">
		                <div className="container clearfix">
		                    <div className="postcontent nobottommargin clearfix">

		                        <h4>{this.state.community.name}</h4>

		                        <div className="list-group">
		                            <a href="#" className="list-group-item">
		                                <h4 className="list-group-item-heading">List group item heading</h4>
		                                <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.</p>
		                            </a>
		                            <a href="#" className="list-group-item">
		                                <h4 className="list-group-item-heading">List group item heading</h4>
		                                <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.</p>
		                            </a>
		                            <a href="#" className="list-group-item">
		                                <h4 className="list-group-item-heading">List group item heading</h4>
		                                <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit, reiciendis expedita voluptate fuga perferendis soluta doloribus quasi quia odio.</p>
		                            </a>
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
	var communitiesArray = state.communityReducer.communitiesArray

	return {
		community: (communitiesArray.length==0) ? {name:''} : communitiesArray[0]
	}

}

export default connect(stateToProps)(Community)






