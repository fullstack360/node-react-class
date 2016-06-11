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
				<Nav />

		        <section id="slider" style={{background: 'url("/images/nyc.jpg") center', overflow:'visible'}} data-height-lg="450" data-height-md="450" data-height-sm="600" data-height-xs="600" data-height-xxs="600">
		            <br />
		        </section>


				{ content }

				<Footer />
			</div>
		)
	}
}

export default Main
