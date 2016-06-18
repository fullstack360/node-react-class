import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Nav extends Component {

	constructor(props, context){
		super(props, context)
	}

	componentDidMount(){
		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				return
			}

			store.dispatch(actions.currentUserReceived(response.user))
		})
	}

	render(){
		var navClass = (this.props.transparent == "yes") ? "transparent-header dark" : "dark"

		return (
	        <header id="header" className={navClass}>

	            <div id="header-wrap">
	                <div className="container clearfix">
	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

	                    <div id="logo">
	                        <a href="/" className="standard-logo" data-dark-logo="/images/logo-dark.png">
	                        	<img src="/images/logo.png" alt="Canvas Logo" />
	                        </a>
	                        <a href="/" className="retina-logo" data-dark-logo="/images/logo-dark@2x.png">
	                        	<img src="/images/logo@2x.png" alt="Canvas Logo" />
	                        </a>
	                    </div>

	                    <nav id="primary-menu">
	                        <ul>
	                            <li><a href="/"><div>Home</div></a></li>
	                            <li><a href="/register"><div>Register</div></a></li>
	                            <li><a href="/"><div>{this.props.currentUser.firstName}</div></a></li>
	                        </ul>
	                    </nav>
	                </div>
	            </div>
	        </header>

		)

	}
}

const stateToProps = function(state){
	return {
		currentUser: state.accountReducer.currentUser
	}

}

export default connect (stateToProps)(Nav)

