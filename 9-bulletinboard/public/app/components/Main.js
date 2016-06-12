import React, { Component } from 'react'
import Communities from '../components/Communities'
import Register from '../components/layout/Register'
import Account from '../components/layout/Account'
import Community from '../components/layout/Community'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class Main extends Component {

	componentDidMount(){
		// console.log('MAIN: '+this.props.slug)
	}

	render(){
		var content = null
		var page = this.props.page
		if (page == 'home')
			content = <Communities />

		if (page == 'register')
			content = <Register />

		if (page == 'account')
			content = <Account />

		if (page == 'community')
			content = <Community slug={this.props.slug} />

		return (
			<div>

				{ content }

				<Footer />
			</div>
		)
	}
}

export default Main
